const express = require('express');
const router = express.Router();

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;




router.get('/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email']})
);

router.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/surveys');
    });

router.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
    console.log('req.session------------------------->', req.session);
    console.log('req.user------------------------->', req.user);

    //res.send(req.session);
    res.send(req.user);
});

// test fetch() ---------------------------------------------------------







module.exports = router;