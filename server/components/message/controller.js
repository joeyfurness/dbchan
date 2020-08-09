const services = require('./service')

const getOne = async function (req, res){
  const messageId = req.params.id
  try{
    const message = await services.getMessageById(messageId)
    res.status(200).json(message)
  }
  catch(error){
    res.status(404).send(error)
  }
}

module.exports = {
  getOne
};