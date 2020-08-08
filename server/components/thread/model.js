const mongoose = require('mongoose');

/*
FIELDS
[ ] Id - int/ID
[ ] Messages - array of Message_Ids
[ ] Board_Id - int / ID
[ ] Date - string / date Object
*/

const threadSchema = new mongoose.Schema({
  messages: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'message',
    required: true,
  },
  board: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'board',
    required: true,
  }
}, {timestamps: true});

module.exports = mongoose.model('thread', threadSchema);