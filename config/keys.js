// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
//
// module.exports = {
//   googleClientID: '197675735902-qv9soeqhe3nuq9e5nnv303d7bvrrk0ek.apps.googleusercontent.com',
//   googleClientSecret: 'yQSFyMY2Xbi8hcLu5fwaj78U',
//   mongoURI: 'mongodb://smbat:SGsg_123@ds235461.mlab.com:35461/node-react-app',
//   cookieKey: 'somemestireassecret',
//   stripePublishableKey: 'pk_test_hGLhstBb8ZCbvUbLTSEpFdvD',
//   stripSecretKey: 'sk_test_Y7kuTRe9eO1Ndmr4AQVdFnFf'
// };




//PROD
// OAuth client
// Here is your client ID
// 163034928733-t6r8mi9io4o54pniu99ijo3h3a2eub98.apps.googleusercontent.com

// Here is your client secret
// eqX_aPiRulCkgshtrIUwc82Z

// mongoURI: 'mongodb://smbatprod:SGsg_123@ds235461.mlab.com:35461/node-react-app',

// mongodb://smbatprod:SGsg_123@ds143461.mlab.com:43461/node-react-app-prod




//stripe
//https://dashboard.stripe.com/account/apikeys
// Publishable key
//pk_test_hGLhstBb8ZCbvUbLTSEpFdvD


// Here is your client ID
// 197675735902-qv9soeqhe3nuq9e5nnv303d7bvrrk0ek.apps.googleusercontent.com

// Here is your client secret
// yQSFyMY2Xbi8hcLu5fwaj78U

