const { placeOrder, getOrders } = require('../controller/orderController');

const router = require('express').Router();

router.post('/placeorder', placeOrder)
router.post('/getorders', getOrders)

module.exports = router