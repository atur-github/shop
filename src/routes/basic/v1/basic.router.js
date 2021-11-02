const { Router } = require('express');

const {
    getIndex
} = require('./basic.controller');

const router = Router();

router.get('/', getIndex);



module.exports = router;