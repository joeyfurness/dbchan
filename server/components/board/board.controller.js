const boardServices = require('./board.service')
const threadServices = require('../thread/thread.service')

const getOne = async (req, res) => {
  const boardId = req.params.id
  const board = await boardServices.getBoardById(boardId)
  res.status(200).json(board)
}

// Create a new Thread and add a Message to it
const createThread = async (req, res) => {
  const newThread = {
   board: req.params.id,
  }

  let newMessage = {
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    user: req.body.user
  }

  try {
    const thread = await threadServices.createThread(newThread);
    newMessage.thread = thread.id
    const message = await threadServices.createMessageAndAddToThread(newMessage)
    // createThreadAndAddToBoard
    res.status(200).json(thread)
  }
  catch (err) {
    console.error(err);
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