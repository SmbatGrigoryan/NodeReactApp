const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

const app = express();

const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');

require('es6-promise').polyfill();
require('isomorphic-fetch');


app.use(express.json());

app.use(bodyParser.json());
app.use(cookieSession({
  keys: [keys.cookieKey],
  maxAge: 30 * 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);
app.use('/', billingRoutes);


if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}



//DELETE --------------------------------------------------------------
//console.log('true || false ------>' ,true || false);
//console.log('false || true------->' ,false || true);



//DELETE --------------------------------------------------------------


module.exports = app;


