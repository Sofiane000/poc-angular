const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-service-tools').mock.service;

router.get('/', (req, res) => {
    mockLib.serveMock(
        req,
        res,
        'dms/categories/list.of.categories.json',
        null,
        '../atlascomplete-web/mocks/'
    );
});

router.get('/:docCatgSK', (req, res) => {
    mockLib.serveMockById(
        req,
        res,
        'dms/categories/list.of.categories.json',
        'DocCatgSK',
        req.params.docCatgSK,
        '../atlascomplete-web/mocks/'
    );
});

module.exports = router;
