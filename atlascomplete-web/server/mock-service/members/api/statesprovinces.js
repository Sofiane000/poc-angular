const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-service-tools').mock.service;
router.get('/', (req, res) => {
    mockLib.serveMock(req, res, 'members/states/list.of.states.provinces.json');
});

module.exports = router;
