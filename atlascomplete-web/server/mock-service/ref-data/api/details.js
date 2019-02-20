const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-service-tools').mock.service;

router.get('/:ListDtlSK', (req, res) => {
    mockLib.serveMockById(
        req,
        res,
        'ref-data/details/list.of.reference.details.json',
        'ListDtlSK',
        req.params.ListDtlSK
    );
});

router.get('/tenant/:TenantTaxnmySK/detail/:ListTypeSK', (req, res) => {
    mockLib.serveMock(req, res, 'ref-data/details/list.of.reference.details.json');
});

module.exports = router;
