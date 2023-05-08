const express = require('express')
const router = express.Router()

const validateController = require('../controllers/validation.controller');
router.get('/createUser',validateController.createUser)

module.exports = router;
// const db = require('../models')