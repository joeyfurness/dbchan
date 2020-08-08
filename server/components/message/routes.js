const { Router } = require('express')
const controllers = require('./controller')

const router = Router()

//ID being passed to this route is a Thread ID

//api/message/:id
router
  .route('/:id')
  .post(controllers.createOne)

module.exports = router