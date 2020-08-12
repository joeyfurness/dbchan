const Thread = require('./thread.model');
const messageServices = require('../message/message.service');

const getThreadById = (id) => {
  return Thread.findById(id).exec();
}

const createMessageAndAddToThread = async (data) => {
  const message = await messageServices.createMessage(data);
  return Thread.findByIdAndUpdate(data.thread, { $push: {messages: message}}, {new: true}).exec();
}

const addMessageToThread = (id, message) => {
  return Thread.findByIdAndUpdate(id, {$push: {messages: message}}, {new: true}).exec();
}

const createThread = (data) => {
  return Thread.create(data);
}

module.exports = {
  getThreadById,
  createMessageAndAddToThread,
  addMessageToThread,
  createThread,
};