const { Router } = require('express');

const {
    getIndex,
    getContact
} = require('./basic.controller');

const router = Router();

router.get('/', getIndex);

router.get('/contact-us', getContact);

module.exports = router;