const { Router } = require('express')
const controllers = require('./message.controller')

const router = Router();

//ID being passed to this route is a message ID

//api/message/:id
router
  .route('/:id')
  .get(controllers.getOne);

module.exports = router