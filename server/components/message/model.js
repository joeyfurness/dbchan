const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true 
  },
  imageUrl: {
    type: String
  },
  ipAddr: {
    type: String
  },
  user: {
    type: String,
    default: 'anonymous'
  },
  thread: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'thread'
  }
}, {timestamps: true})

module.exports = mongoose.model('messageSchema', message)