const Board = require('./board.model')
const mongoose = require('mongoose')

const createBoard = async (newBoard) => {
  return Board.create(newBoard);
}

const getBoardById = async (boardId) => {
  return Board.findById(boardId);
}

const addThreadToBoard = async(boardId, thread) => {
  return Board.findByIdAndUpdate(boardId, {$push: {threads: thread}}, {new: true}).exec();
}

module.exports = {
  createBoard,
  getBoardById,
  addThreadToBoard,
}