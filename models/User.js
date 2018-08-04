
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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

mongoose.model('users', userSchema);