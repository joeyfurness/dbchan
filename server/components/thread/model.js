const mongoose = require('mongoose');

/*
FIELDS
[x] Id - int/ID
[x] Messages - array of Message_Ids
[x] Board_Id - int / ID
[x] Date - string / date Object
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