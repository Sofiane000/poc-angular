'use strict';

const express = require('express');
const router = express.Router();

// expose WORK ITEMS APIs
router.use('/workitems', require('./api/workitems'));

module.exports = router;
