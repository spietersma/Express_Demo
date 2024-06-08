const express = require('express');
const router = express.Router();
const {
	getProduct,
	getProducts,
	addProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/prod.controller.js');



router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
