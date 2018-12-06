const express = require('express');
const router = express.Router();
const mockLib = require('../../lib');

router.get('/', (req, res) => {
    mockLib.serveMock(req, res, 'idm/services/list.of.services.json');
});

module.exports = router;
