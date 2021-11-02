const { Router } = require('express');

const {
    getProductsList,
    getProductDetails
} = require('./product.controller');

const router = Router();

router.get('/product/list', getProductsList);

router.get('/product/:id', getProductDetails);

module.exports = router;