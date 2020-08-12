const threadServices = require('./thread.service.js');
const messageServices = require('../message/message.service');

const getOne = async (req, res) => {
  const threadId = req.params.id;
  const thread = await threadServices.getThreadById(threadId);
  res.status(200).json(thread);
};

const createOne = async (req, res) => {
  const threadId = req.params.id;
  const data = {
    thread: threadId,
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    user: req.body.user,
  };
  try {
    const message = await messageServices.createMessage(data);
    const thread = await threadServices.addMessageToThread(threadId, message);
    res.status(200).json(thread);
  } catch {
    res.status(400).end();
  }
};

module.exports = {
  getOne,
  createOne
};