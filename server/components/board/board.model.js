const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
}, {timestamps: true});

module.exports = mongoose.model('board', boardSchema);