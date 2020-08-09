const Board = require('./model')
const mongoose = require('mongoose')

const createBoard = async (newBoard) => {
  return Board.create(newBoard)
}

const getBoardById = async (boardId) => {
  return Board.findById(boardId)
}

module.exports = {
  createBoard,
  getBoardById
}