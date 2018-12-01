const express = require('express');
const router = express.Router();
const mockLib = require('../../lib');

router.get('/', (req, res) => {
  mockLib.serveMock(res, 'idm/components/user.components.json');
});

module.exports = router;
