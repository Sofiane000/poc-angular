const express = require('express');
const router = express.Router();
const mockLib = require('../../lib');

router.get('/', (req, res) => {
  mockLib.serveMock(res, 'idm/users/list.of.users.json');
});

router.get('/:loginSk', (req, res) => {
  mockLib.serveMockById(res, 'idm/users/list.of.users.json', 'LoginSK', req.params.loginSk);
});

router.put('/', (req, res) => {
  mockLib.serveMirror(req, res);
});

router.post('/', (req, res) => {
  mockLib.serveMirror(req, res);
});

router.delete('/:id', (req, res) => {
  mockLib.serveMock(res, 'idm/users/list.of.users.json');
});

module.exports = router;