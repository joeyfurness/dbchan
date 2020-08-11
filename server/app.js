require('dotenv').config();

const express = require('express');
const { json, urlencoded } = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const db = require('./utils/connect');
const messageRouter = require('./components/message/message.routes');
const threadRouter = require('./components/thread/thread.routes');
const boardRouter = require('./components/board/board.routes');

const app = express();
app.disable('x-powered-by');

app.use(cors()); // Fixes Cross Origin Resource Sharing
app.use(json()); // Encodes request as json
app.use(urlencoded({ extended: true})); // Idk exactly what this does but it fixes some stuff in the header
app.use(morgan('dev')); // Logs HTTP to the console

app.use('/message', messageRouter);
app.use('/thread', threadRouter);
app.use('/board', boardRouter);

app.get('/', (req, res) => {
	res.send('Hello, I am your Express App!');
});

const port = process.env.PORT;
db.connect().then(() => {
	app.listen(port, () => console.log(`App listening on port ${port}`));
})
