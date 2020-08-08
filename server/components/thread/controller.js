const services = require('./service.js');

const getOne = async (req, res) => {
  const threadId = req.params.id;
  const thread = await services.getThreadById(threadId);
  res.status(200).json(thread);
};

const createOne = async (req, res) => {
  const data = {
    boardId: req.params.id,
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    user: req.body.user,
  };
  const thread = await services.createThread(data);
  res.status(200).json(thread);
};

module.exports = {
  getOne,
  createOne
};