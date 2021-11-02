const { Router } = require('express');

const router = Router();

// v1 routes implement
const v1_basicRoutes = require('./basic/v1/basic.router');
const v1_customerRoutes = require('./customer/v1/customer.router');
const v1_productRoutes = require('./product/v1/product.router');

router.use(['','/v1'], v1_basicRoutes);
router.use(['','/v1'], v1_customerRoutes);
router.use(['','/v1'], v1_productRoutes);




module.exports = router;