const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-service-tools').mock.service;
router.get('/', (req, res) => {
    mockLib.serveMock(req, res, 'idm/users/list.of.users.json');
});

router.get('/:loginSk', (req, res) => {
    mockLib.serveMockById(req, res, 'idm/users/list.of.users.json', 'LoginSK', req.params.loginSk);
});

router.put('/', (req, res) => {
    mockLib.serveMirror(req, res);
});

router.post('/', (req, res) => {
    mockLib.serveMirror(req, res);
});

router.delete('/:id', (req, res) => {
    mockLib.serveMock(req, res, 'idm/users/list.of.users.json');
});

module.exports = router;
