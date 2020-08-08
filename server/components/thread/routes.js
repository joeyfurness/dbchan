const {Router} = require('express');
const controllers = require('./controller');

const router = Router();

router
  .route('/:id')
  // :id is a thread id
  .get(controllers.getOne)
  // :id is a board id
  .post(controllers.createOne);

  module.exports = router;