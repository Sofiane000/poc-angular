const express = require('express');
const router = express.Router();
const mockLib = require('../../../../../atlas-service-tools').mock.service;
const _ = require('lodash');

router.get(['/', '/:type'], (req, res) => {
    let filterBy;
    if (req.params.type) {
        if (req.params.type === 'assigned') {
            filterBy = 'I_ASSIGNED';
        } else if (req.params.type === 'available') {
            filterBy = 'I_AVAILABLE';
        } else {
            mockLib.serveFailed(req, res, {
                message: `Invalid filter type "${req.params.type}"`,
            });
        }
    }
    mockLib.serveMock(
        req,
        res,
        'bpm/workitems/list.of.workitems.json',
        null,
        '../atlascomplete-web/mocks/',
        (payload) => {
            if (filterBy) {
                return _.filter(payload, (row) => {
                    return row.taskStatus === filterBy;
                });
            } else {
                return payload;
            }
        }
    );
});

module.exports = router;
