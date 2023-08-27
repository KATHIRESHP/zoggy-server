const { getallorders } = require('../controller/orderController');

const router = require('express').Router();

router.post('/getallorders', getallorders);

module.exports = router;