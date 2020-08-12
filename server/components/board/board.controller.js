const boardServices = require('./board.service')
const threadServices = require('../thread/thread.service')
const messageServices = require('../message/message.service');

const getThreads = async (req, res) => {
  const boardId = req.params.id;
  const threads = await threadServices.getThreadsByBoardId(boardId);
  const messages = [];
  for (const thread of threads) {
    messages.push(await messageServices.getMessagesByThreadId(thread._id));
  }
  res.status(200).json(messages);
}

// Create a new Thread and add a Message to it, then add to Board
const createThread = async (req, res) => {
  const boardId = req.params.id;
  const newThread = {
   board: boardId,
  }

  const newMessage = {
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    user: req.body.user
  }

  try {
    const thread = await threadServices.createThread(newThread);
    newMessage.thread = thread.id;
    const message = await messageServices.createMessage(newMessage);
    res.status(200).json(message)
  }
  catch (err) {
    res.status(400).end()
  }
}

//Create a single blank board
const createBoard = async (req, res) => {
  const data = {
    name: req.body.name,
    category: req.body.category
  }
  const board = await boardServices.createBoard(data);
  res.status(200).json(board)
}

module.exports = {
  getThreads,
  createThread,
  createBoard
}