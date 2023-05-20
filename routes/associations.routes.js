const express = require('express');
const router = express.Router();
const associateController = require('../controllers/association.controller')


router.get('/get' , associateController.getUser)
router.get('/create' , associateController.createUser)





module.exports = router;