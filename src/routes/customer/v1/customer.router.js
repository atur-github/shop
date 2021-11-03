const { Router } = require('express');

const { 
    getLogin,
    postLogin,
    postRegister,
    getCart
} = require('./customer.controller');

const mustLogin = require('../../../utils/mustLogin');

const router = Router();

router.get('/login', getLogin);

router.post('/login', postLogin);

router.post('/register', postRegister);

router.get('/cart', mustLogin, getCart);

module.exports = router;