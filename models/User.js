const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  role: {
    type: String
  },
  created: {
    type: Date , default : Date.now()
  },
  updated: {
    type: Date , default : Date.now()
  }
}, {
    collection: 'user'
  })

module.exports = mongoose.model('User', userSchema)