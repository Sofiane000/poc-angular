const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-mock-helper/lib');
router.get('/', (req, res) => {
  mockLib.serveMock(req, res, 'idm/users/list.of.users.json', null, '../atlascomplete-web/mocks/');
});

router.get('/:loginSk', (req, res) => {
  mockLib.serveMockById(req, res, 'idm/users/list.of.users.json', 'LoginSK', req.params.loginSk, '../atlascomplete-web/mocks/');
});

router.put('/', (req, res) => {
  mockLib.serveMirror(req, res);
});

router.post('/', (req, res) => {
  mockLib.serveMirror(req, res);
});

router.delete('/:id', (req, res) => {
  mockLib.serveMock(req, res, 'idm/users/list.of.users.json', null, '../atlascomplete-web/mocks/');
});

module.exports = router;
