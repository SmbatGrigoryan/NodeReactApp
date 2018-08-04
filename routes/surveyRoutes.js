const express = require('express');
const router = express.Router();
//const {stripeSecretKey} = require('../config/keys');

//const stripe = require('stripe')(stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

//middlewares/requireCredits.js

router.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
  console.log('somefing')
});

module.exports = router;