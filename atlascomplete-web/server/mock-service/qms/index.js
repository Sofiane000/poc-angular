'use strict';

const express = require('express');
const router = express.Router();

// expose USERS APIs
router.use('/chase', require('./api/chase'));
router.use('/members', require('./api/members'));

module.exports = router;
