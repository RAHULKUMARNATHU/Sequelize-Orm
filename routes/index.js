const express = require('express');

const router = express.Router();


router.use('/finders', require('./finder.routes'));

module.exports = router;