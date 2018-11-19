'use strict';

const express = require('express');
const router = express.Router();

// expose USERS APIs
router.use('/users', require('./api/users'));

module.exports = router;
