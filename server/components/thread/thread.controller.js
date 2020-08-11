const services = require('./thread.service.js');

const getOne = async (req, res) => {
  const threadId = req.params.id;
  const thread = await services.getThreadById(threadId);
  res.status(200).json(thread);
};

const createOne = async (req, res) => {
  const data = {
    thread: req.params.id,
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    user: req.body.user,
  };
  try {
    const thread = await services.createMessageAndAddToThread(data);
    res.status(200).json(thread);
  } catch {
    res.status(400).end();
  }
};

module.exports = {
  getOne,
  createOne
};