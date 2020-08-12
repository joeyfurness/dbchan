const threadServices = require('./thread.service.js');
const messageServices = require('../message/message.service');

const getMessages = async (req, res) => {
  const threadId = req.params.id;
  const messages = await messageServices.getMessagesByThreadId(threadId);
  res.status(200).json(messages);
};

const createMessage = async (req, res) => {
  const threadId = req.params.id;
  const data = {
    thread: threadId,
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    user: req.body.user,
  };
  try {
    const message = await messageServices.createMessage(data);
    res.status(200).json(message);
  } catch {
    res.status(400).end();
  }
};

module.exports = {
  getMessages,
  createMessage,
};