const express = require('express');
const router = express.Router();
const mockLib = require('../../lib');

router.get('/', (req, res) => {
  mockLib.serveMock(res, 'idm/tenants/list.of.tenants.json');
});

router.get('/:tenantTaxnmySK', (req, res) => {
  mockLib.serveTenantById(res, 'idm/tenants/list.of.tenants.json', req.params.tenantTaxnmySK);
});

router.put('/', (req, res) => {
  mockLib.serveMirror(req, res);
});

router.post('/', (req, res) => {
  mockLib.serveMirror(req, res);
});

router.delete('/:id', (req, res) => {
  mockLib.serveMock(res, 'idm/tenants/list.of.tenants.json');
});

module.exports = router;
