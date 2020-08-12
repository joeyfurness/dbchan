const Thread = require('./thread.model');
const messageServices = require('../message/message.service');

const getThreadById = (id) => {
  return Thread.findById(id).exec();
}

const getThreadsByBoardId = (boardId) => {
  return Thread.find({board: boardId}).exec();
}

const createThread = (data) => {
  return Thread.create(data);
}

module.exports = {
  getThreadById,
  createMessageAndAddToThread,
  addMessageToThread,
  createThread,
  getThreadsByBoardId,
};