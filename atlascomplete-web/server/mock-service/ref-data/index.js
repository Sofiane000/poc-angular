'use strict';

const express = require('express');
const router = express.Router();

// expose Ref Data APIs
router.use('/lists', require('./api/lists'));
router.use('/details', require('./api/details'));

module.exports = router;
