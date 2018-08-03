const express = require('express');
const router = express.Router();
const {stripSecretKey} = require('../config/keys');

const stripe = require('stripe')(stripSecretKey);
const requireLogin = require('../middlewares/requireLogin');

router.post('/api/strip', requireLogin, async (req, res) => {

  //console.log(req.body);
  const charge = await stripe.charges.create({
    amount: 100,
    currency: "usd",
    description: "Charge for jenny.rosen@example.com",
    source: req.body.id
  });
  // console.log('charge---->', charge);
  // console.log('req.user----------------->', req.user);

  req.user.credits += 100;
  const user = await req.user.save();
  console.log(user);
  res.send(user);

});

module.exports = router;