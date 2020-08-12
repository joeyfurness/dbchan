const mongoose = require('mongoose');

/*
FIELDS
[x] Id - int/ID
[x] Messages - array of Message_Ids
[x] Board_Id - int / ID
[x] Date - string / date Object
*/

const threadSchema = new mongoose.Schema({
  board: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'board',
  },
}, {timestamps: true});

module.exports = mongoose.model('thread', threadSchema);