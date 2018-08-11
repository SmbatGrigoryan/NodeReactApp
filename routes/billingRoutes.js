const express = require('express');
const router = express.Router();
const {stripeSecretKey} = require('../config/keys');

const stripe = require('stripe')(stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

router.post('/api/strip', requireLogin, async (req, res) => {

  const charge = await stripe.charges.create({
    amount: 100,
    currency: "usd",
    description: "Charge for jenny.rosen@example.com",
    source: req.body.id
  });

  req.user.credits += 100;
  const user = await req.user.save();
  res.send(user);

});

module.exports = router;