const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const authRouter = require('./routes/authRouter');
const billingRoutes = require('./routes/billingRoutes');


require('es6-promise').polyfill();
require('isomorphic-fetch');



require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(cookieSession({
    keys: [keys.cookieKey],
    maxAge: 30 * 24 * 60 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRouter);
app.use('/',billingRoutes);



// DELETE THIS ROUTE
app.get('/', (req, res) => {
  res.send({hi: 'This is react node App'});
})


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





module.exports = app;


