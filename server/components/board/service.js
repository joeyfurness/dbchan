const Board = require('./model')
const mongoose = require('mongoose')

const createBoard = async (newBoard) => {
  return Board.create(data)
}

const getBoardById = async (boardId) => {
  return Board.findById(boardId)
}