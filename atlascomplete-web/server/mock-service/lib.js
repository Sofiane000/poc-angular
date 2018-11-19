const fs = require('fs');
const path = require('path');
const _ = require('lodash');

class MockLib {

  async loadMock(pathToMock) {
    return await this.__loadMock(path.resolve(__dirname, './../../mocks/' + pathToMock))
  }

  serveMock(res, pathToMock) {
    this.loadMock(pathToMock).then(
      data => this.serveSuccess(res, data),
      error => this.serveFailed(res, error)
    );
  }

  serveMockById(res, pathToMock, idField, idValue) {
    this.loadMock(pathToMock).then(data => {
        this.serveSuccess(res, _.find(data, (entry) => {
          return entry[idField] == idValue;
        }));
      },
      error => this.serveFailed(res, error)
    );
  }

  serveSuccess(res, data) {
    this.serveMockData(res, 200, data, [], void 0);
  }

  serveFailed(res, error) {
    this.serveMockData(res, 500, void 0, [{
      code: '100100',
      type: 'ERROR',
      message: error.message,
      dataIndex: ''
    }], void 0);
  }

  serveMockData(res, statusCode, data, messages, meta) {
    if (statusCode === 200) {
      res.status(200).send({
        success: true,
        data: data,
        messages: messages,
        metadata: meta
      });
    } else {
      res.status(200).send({
        success: false,
        data: data,
        messages: messages,
        metadata: meta
      });
    }
  }

  serveMirror(req, res) {
    const requestBody = req.body;
    this.serveMockData(res, 200, requestBody, void 0, void 0);
    return requestBody;
  }

  __loadMock(fullPath) {
    return new Promise((resolve, reject) => {
      fs.readFile(fullPath, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(JSON.parse(data.toString()));
        }
      });
    });
  }

}

module.exports = new MockLib();
