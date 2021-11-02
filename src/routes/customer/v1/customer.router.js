const { Router } = require('express');

const { 
    getLogin,
    getCart
} = require('./customer.controller');

const router = Router();

router.get('/login', getLogin);

router.get('/cart', getCart);

module.exports = router;