const _ = require('lodash');
//const Path = require('path-parser');
const Path = require('path-parser').default;
const {URL} = require('url');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
//const {stripeSecretKey} = require('../config/keys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');


//const stripe = require('stripe')(stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');




router.get('/api/surveys', requireLogin, async (req, res) => {
  const surveys = await Survey.find({ _user: req.user.id })
      .select( {recipients: false} );


  res.send(surveys);
});

router.get('/api/surveys/:surveyId/:choice', (req, res) => {
  res.send('Thanks for voting! ...');
});

router.post('/api/surveys/webhooks', (req, res) => {

  const p = new Path('/api/surveys/:surveyId/:choice');

  _.chain(req.body)
      .map(({email, url}) => {
        const match = p.test(new URL(url).pathname);
        if (match) {
          return {email, surveyId: match.surveyId, choice: match.choice};
        }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({surveyId, email, choice}) => {
        Survey.updateOne(
            {
              _id: surveyId,
              recipients: {
                $elemMatch: {email: email, responded: false}
              }
            },
            {
              $inc: {[choice]: 1},
              $set: {'recipients.$.responded': true},
              lastResponded: new Date()
            }
        ).exec();
      })
      .value();

  res.send({});
});


router.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

  const {surveyTitle, subject, body, recipients} = req.body;
  const survey = new Survey({
    title: surveyTitle,
    subject: subject,
    body: body,
    recipients: recipients.split(',').map((email) => {
      return {email: email.trim()};
    }),
    _user: req.user.id,
    dateSent: Date.now()
  });

  // place for sending email
  const mailer = new Mailer(survey, surveyTemplate(survey)); // some issue

  try {
    await mailer.send();
    await survey.save();
    req.user.credits -= 100;
    const user = await req.user.save();

    res.send(user);
  } catch (err) {
    res.status(422).send(err);
  }
});

module.exports = router;


