const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/prod.model.js');
const productRoute = require('./Routes/prod.route.js');
const app = express();

app.use(express.json());


app.use('/api/products', productRoute )
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
