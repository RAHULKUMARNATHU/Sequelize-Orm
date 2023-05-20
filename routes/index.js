const express = require('express');

const router = express.Router();


router.use('/finders', require('./finder.routes'));
router.use('/validators', require('./validation.routes'));
router.use('/rawQueries', require('./raw-queries.routes'))

module.exports = router;