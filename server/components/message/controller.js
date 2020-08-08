import service from './service'

const createOne = async function (req, res){ 
  const newMessage =  {
    threadId: req.params.id,
    newMessage: {
      body: req.body.body,
      imageUrl: req.body.imageUrl,
      user: req.body.user
    }
  }
  const result = await service.createMessage(newMessage)
  res.status(200).json(result)
}

export default createOne;