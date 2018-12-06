const express = require('express');
const router = express.Router();
const mockLib = require('../../lib');

router.get('/tree', (req, res) => {
    mockLib.serveMock(req, res, 'idm/menus/list.of.menus.json');
});

module.exports = router;
