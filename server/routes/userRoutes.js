const express = require('express');
const { login, emailverify, register } = require('../controller/userController');

const router = express.Router()

router.post('/login', login);
router.post('/emailverify', emailverify)
router.post('/register', register)

module.exports =  router;