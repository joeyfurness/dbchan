import { Router } from 'express'
import controllers from './controller'

const router = Router()

//ID being passed to this route is a Thread ID

//api/message/:id
router
  .route('/:id')
  .post(controllers.createOne)

  export default router