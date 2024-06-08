const express = require('express');
const product = require('./models/prod.model.js');
const productController = require('./controllers/prod.controller.js');
const router = express.Router();




router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);


module.exports = router;