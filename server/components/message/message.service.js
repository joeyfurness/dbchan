const Message = require('./message.model');

const createMessage = function(newMessage){
  return Message.create(newMessage);
}

const getMessageById = function(messageId) {
  return Message.findById(messageId).exec()
}

const getMessagesByThreadId = function(threadId) {
  return Message.find({thread: threadId}).sort('createdAt').exec();
}

module.exports = {
  createMessage,
  getMessageById,
  getMessagesByThreadId,
}