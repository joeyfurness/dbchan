const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello, I am your Express App! This is some text!')
});

app.get('/418', (req, res) => {
	res.set('X-Custom-Header', 'true');
	res.status(418);
	res.send('Error: 418');
});

app.listen(port, () => console.log(`App listening on port ${port}`));
