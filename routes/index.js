const express = require('express');

const router = express.Router();


router.use('/finders', require('./finder.routes'));
router.use('/validators', require('./validation.routes'));


module.exports = router;