import 'dotenv/config';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = process.env.PORT;
app.disable('x-powered-by');

app.use(cors()); // Fixes Cross Origin Resource Sharing
app.use(json()); // Encodes request as json
app.use(urlencoded({ extended: true})); // Idk exactly what this does but it fixes some stuff in the header
app.use(morgan('dev')); // Logs HTTP to the console

app.get('/', (req, res) => {
	res.send('Hello, I am your Express App!');
});

app.listen(port, () => console.log(`App listening on port ${port}`));
