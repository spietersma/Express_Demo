const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.get('/', (req, res) => {
	res.send('Hello From Node Server!');
});

mongoose
	.connect(
		'mongodb+srv://spietersma:root@silverdb.tl6gmsu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=SILVERDB'
	)
	.then(() => {
		console.log('Connected to MongoDB');
		app.listen(3000, () => {
			console.log('Example app listening on port 3000!');
		});
	})
	.catch((err) => {
		console.log(err);
	});
