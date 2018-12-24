const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-mock-helper/lib');

router.get('/', (req, res) => {
  mockLib.serveMock(req, res, 'idm/services/list.of.services.json', null, '../atlascomplete-web/mocks/');
});

module.exports = router;
