const mongoose = require('mongoose');
const {Schema} = mongoose;


const User = mongoose.model('User', {
  googleID: {
    type: String
  },
  credits: {
    type: Number,
    default: 0
  },
  displayName: {
    type: String
  },
  emails: {
    type: Array
  },
  createdAt: {
    type: String
  }
});


module.exports = User;