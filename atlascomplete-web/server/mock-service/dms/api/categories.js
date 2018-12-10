const express = require('express');
const router = express.Router();
const mockLib = require('../../lib');

router.get('/', (req, res) => {
    mockLib.serveMock(req, res, 'dms/categories/list.of.categories.json');
});

router.get('/:docCatgSK', (req, res) => {
    mockLib.serveMockById(
        req,
        res,
        'dms/categories/list.of.categories.json',
        'DocCatgSK',
        req.params.docCatgSK
    );
});

module.exports = router;
