'use strict';

const express = require('express');
const router = express.Router();

// expose MEMBERS APIs
router.use('/states', require('./api/statesprovinces'));
router.unsubscribe('/membersearch', require('./api/membersearch'));

module.exports = router;