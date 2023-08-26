const { placeOrder, getOrders, updatecart, getcart } = require('../controller/orderController');

const router = require('express').Router();

router.post('/placeorder', placeOrder)
router.post('/getorders', getOrders)
router.post('/updatecart', updatecart)
router.post('/getcart',getcart)

module.exports = router