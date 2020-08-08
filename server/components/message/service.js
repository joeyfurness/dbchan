const Message = require('./message')
const mongoose = require('mongoose')

const createMessage = async function(newMessage){
  return Message.create(newMessage);
}

const getMessageById = async function(messageId) {
  return Message.findById(messageId).exec()
}

module.exports = {
  createMessage,
  getMessageById
}