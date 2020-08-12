const boardServices = require('./board.service')
const threadServices = require('../thread/thread.service')
const messageServices = require('../message/message.service');

const getOne = async (req, res) => {
  const boardId = req.params.id
  const board = await boardServices.getBoardById(boardId)
  res.status(200).json(board)
}

// Create a new Thread and add a Message to it, then add to Board
const createThread = async (req, res) => {
  const boardId = req.params.id;
  const newThread = {
   board: boardId,
  }

  let newMessage = {
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    user: req.body.user
  }

  try {
    const thread = await threadServices.createThread(newThread);
    newMessage.thread = thread.id;
    const message = await messageServices.createMessage(newMessage);
    const updatedThread = await threadServices.addMessageToThread(thread.id, message);
    const board = await boardServices.addThreadToBoard(boardId, updatedThread);
    res.status(200).json(board)
  }
  catch (err) {
    res.status(400).end()
  }
}

//Create a single blank board
const createOne = async (req, res) => {
  const data = {
    name: req.body.name,
    category: req.body.category
  }
  const board = await boardServices.createBoard(data);
  res.status(200).json(board)
}

module.exports = {
  getOne,
  createThread,
  createOne
}