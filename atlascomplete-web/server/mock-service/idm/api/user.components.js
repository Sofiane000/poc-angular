const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-mock-helper/lib');

router.get('/', (req, res) => {
  mockLib.serveMock(req, res, 'idm/components/user.components.json', null, '../atlascomplete-web/mocks/');
});

module.exports = router;
