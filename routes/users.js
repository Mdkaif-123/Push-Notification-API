const express = require('express')
const router = express.Router()
const request = require('../controller/sendMessageToMechanics')
const registerUser = require('../controller/registerUser')

router.post('/request', request)
router.post('/create',registerUser)
module.exports = router
