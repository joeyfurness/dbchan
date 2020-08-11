const {Router} = require('express');
const controllers = require('./thread.controller');

const router = Router();

// :id is a thread id
router
  .route('/:id')
  .get(controllers.getOne)
  .post(controllers.createOne);

  module.exports = router;