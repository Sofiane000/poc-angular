const express = require('express');
const router = express.Router();
const mockLib = require('../../lib');

router.get('/', (req, res) => {
    mockLib.serveMockAsTree(req, res, 'idm/menus/list.of.menus.json', 'MenuSK', 'ParentMenuSK');
});

router.get('/:menuSK', (req, res) => {
    mockLib.serveMockById(req, res, 'idm/menus/list.of.menus.json', 'MenuSK', req.params.menuSK);
});

router.put('/', (req, res) => {
    mockLib.serveMirror(req, res);
});

router.post('/', (req, res) => {
    mockLib.serveMirror(req, res);
});

router.delete('/:id', (req, res) => {
    mockLib.serveMock(req, res, 'idm/menus/list.of.menus.json');
});

module.exports = router;
