const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

module.exports = router;