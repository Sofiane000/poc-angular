'use strict';

const express = require('express');
const router = express.Router();

// expose USERS APIs
router.use('/users', require('./api/users'));
router.use('/tenants', require('./api/tenants'));
router.use('/user/components', require('./api/user.components'));
router.use('/menus', require('./api/menus'));
router.use('/services', require('./api/services'));

module.exports = router;
