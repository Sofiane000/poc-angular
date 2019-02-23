'use strict';
module.exports = (app) => {
    app.use(function(req, res, next) {
        res.header('Content-Type', 'application/json');
        next();
    });

    // serve IDM APIs
    app.use('/api/idm', require('./idm'));
    // serve BPM APIs
    app.use('/api/bpm', require('./bpm'));
    // serve DMS APIs
    app.use('/api/dms', require('./dms'));
    // serve Ref Data APIs
    app.use('/api/ref-data', require('./ref-data'));
    // serve Members APIs
    app.use('/api/members', require('./members'));
    // serve QMS APIs
    app.use('/api/qms', require('./qms'));

    /**
     * Common error handling
     */
    app.use((data, req, res, next) => {
        if (res.headersSent) {
            return next(err);
        }
        res.status(err.status || 500);
        let errorMessage = err.message || err;
        if (typeof errorMessage === 'string' && errorMessage.startsWith('errors.')) {
            errorMessage = res.__t(errorMessage);
        }
        res.send({
            code: err.code || err.status || 9999,
            message: errorMessage,
            stack: process.env.NODE_ENV === 'development' ? err.stack : '',
        });
    });
};
