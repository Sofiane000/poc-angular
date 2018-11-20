'use strict';
module.exports = (app) => {

  app.use(function (req, res, next) {
    res.header("Content-Type",'application/json');
    next();
  });

  // serve IDM APIs
  app.use('/api/idm', require('./idm'));

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