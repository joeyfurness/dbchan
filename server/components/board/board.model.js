const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
  threads: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'thread'
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String
  }
}, {timestamps: true});

module.exports = mongoose.model('board', boardSchema);