const { Router } = require('express')
const controllers = require('./board.controller')

const router = Router()

// /api/board/:id
router
  .route('/:id') //board ID
  .get(controllers.getThreads)
  .post(controllers.createThread)

// /api/board/
router
  .route('/')
  .post(controllers.createBoard)

module.exports = router;