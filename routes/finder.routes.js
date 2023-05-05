const express = require('express');
const router = express.Router();

const finderController = require('../controllers/finder.controller');


router.get('/findAll',finderController.findAll);
router.get('/findByPk',finderController.findByPk);
router.get('/findOne',finderController.findOne);
router.get('/findOrCreate',finderController.findOrCreate);
router.get('/findAndCountAll',finderController.findAndCountAll);




module.exports = router;

