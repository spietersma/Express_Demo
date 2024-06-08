const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/prod.model.js');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello From Node Server!');
});

app.post('/api/products', async (req, res) => { 
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
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
