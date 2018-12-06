'use strict';

const express = require('express');
const router = express.Router();

// expose USERS APIs
router.use('/categories', require('./api/categories'));

module.exports = router;
