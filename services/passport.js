const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => {
            done(null, user);
        })
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {

        const existingUser = await User.findOne({googleID: profile.id});
        if (existingUser) {
            console.log('there is a user', existingUser);
            return done(null, existingUser);
        }

        const user = await new User({
            googleID: profile.id,
            displayName: profile.displayName,
            emails: profile.emails,
            createdAt: new Date().toLocaleString()
        })
            .save()
            .then((doc) => console.log(doc)); // DELETE
        done(null, user);
    })
);

