const express = require('express')
const router = express.Router()
const request = require('../controller/sendMessageToMechanics')

router.post('/create', request)

module.exports = router