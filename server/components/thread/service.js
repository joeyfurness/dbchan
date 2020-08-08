const Thread = require('./model');
const messageServices = require('../message/service');

const getThreadById = (id) => {
  return Thread.findById(id).exec();
}

const createMessageAndAddToThread = async (data) => {
  const message = await messageServices.createMessage(data);
  return Thread.findByIdAndUpdate(data.thread, { $push: {messages: message}}, {new: true}).exec();
}

module.exports = {
  getThreadById,
  createMessageAndAddToThread,
};