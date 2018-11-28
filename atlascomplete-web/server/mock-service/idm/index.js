'use strict';

const express = require('express');
const router = express.Router();

// expose USERS APIs
router.use('/users', require('./api/users'));
router.use('/tenants', require('./api/tenants'));


module.exports = router;
