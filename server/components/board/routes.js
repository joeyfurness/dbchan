const { Router } = require('express')
const controllers = require('./controller')

const router = Router()

// /api/board/:id
router
  .route('/:id') //board ID
  .get(controllers.getOne)
  .post(controllers.createThread)

// /api/board/
router
  .route('/')
  .post(controllers.createOne)

module.exports = router;