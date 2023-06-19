const express = require('express')
const router = express.Router()
const registerMechanics = require('../controller/registerMechanics')

router.post('/create', registerMechanics)

module.exports = router