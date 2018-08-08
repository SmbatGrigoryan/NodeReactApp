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

router.get('/api/surveys/thanks', (req, res) => {

  res.send('thank you thery much ..... ');
});

router.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {

  const {title, subject, body,  recipients} = req.body;
  const survey = new Survey({
    title: title,
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

// DELETE---------------------------------------------------------
const survey = {
  title: "SM X TITLE",
  subject: "some X subject",
  recipients: "smbatgrigoryan@gmail.com",
  body: "here is som body text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

// DELETE---------------------------------------------------------

