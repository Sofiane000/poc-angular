const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-service-tools').mock.service;

router.get('/', (req, res) => {
    mockLib.serveMock(req, res, 'qms/chase/list.of.chase.management.json');
});

module.exports = router;
