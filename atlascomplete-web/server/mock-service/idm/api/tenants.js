const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-service-tools').mock.service;

router.get('/', (req, res) => {
  mockLib.serveMockAsTree(
    req,
    res,
    'idm/tenants/list.of.tenants.json',
    'TenantTaxnmySK',
    'ParentTenantTaxnmySK'
  );
});

router.get('/:tenantTaxnmySK', (req, res) => {
  mockLib.serveMockById(
    req,
    res,
    'idm/tenants/list.of.tenants.json',
    'TenantTaxnmySK',
    req.params.tenantTaxnmySK
  );
});

router.put('/', (req, res) => {
  mockLib.serveMirror(req, res);
});

router.post('/', (req, res) => {
  mockLib.serveMirror(req, res);
});

router.delete('/:id', (req, res) => {
  mockLib.serveMock(
    req,
    res,
    'idm/tenants/list.of.tenants.json'
  );
});

module.exports = router;
