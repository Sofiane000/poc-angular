const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-service-tools').mock.service;

router.get('/', (req, res) => {
    mockLib.serveMock(req, res, 'ref-data/lists/list.of.reference.lists.json');
});

router.get('/:listTypeSK', (req, res) => {
    mockLib.serveMockById(
        req,
        res,
        'ref-data/lists/list.of.reference.lists.json',
        'ListTypeSK',
        req.params.listTypeSK
    );
});

module.exports = router;
