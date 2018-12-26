const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const mockConfig = require('./config');

class MockLib {
    async loadMock(pathToMock, req, filterCb) {
        let rawMockData = await this.__loadMock(
            path.resolve(__dirname, mockConfig.baseFolder + pathToMock)
        );
        const pageSize = +req.get('pageSize');
        const restartRowId = +req.get('restartRowId');
        const headers = {};
        let mockData;
        if (filterCb) {
            rawMockData = filterCb(rawMockData);
        }
        if (pageSize) {
            mockData = [];
            let startFrom = restartRowId || 0;
            let stopAt = Math.min(startFrom + pageSize, rawMockData.length);
            for (let idx = startFrom; idx < stopAt; idx++) {
                mockData.push(rawMockData[idx]);
            }
            if (stopAt < rawMockData.length) {
                headers.restartRowId = stopAt;
            }
        } else {
            mockData = rawMockData;
        }
        return {
            $payload: mockData,
            $headers: headers,
        };
    }

    serveMockAsTree(req, res, pathToMock, keyField, parentKeyField) {
        this.loadMock(pathToMock, req, null).then(
            (data) => {
                data.$payload = this.convertToTree(data.$payload, keyField, parentKeyField);
                this.serveSuccess(req, res, data);
            },
            (error) => this.serveFailed(req, res, error)
        );
    }

    serveMock(req, res, pathToMock, filterCb) {
        this.loadMock(pathToMock, req, filterCb).then(
            (data) => this.serveSuccess(req, res, data),
            (error) => this.serveFailed(req, res, error)
        );
    }

    serveMockById(req, res, pathToMock, idField, idValue) {
        this.loadMock(pathToMock, req, null).then(
            (data) => {
                data.$payload = _.find(data.$payload, (entry) => {
                    return entry[idField] == idValue;
                });
                this.serveSuccess(req, res, data);
            },
            (error) => this.serveFailed(req, res, error)
        );
    }

    serveSuccess(req, res, data) {
        this.serveMockData(req, res, 200, data, [], void 0);
    }

    serveFailed(req, res, error) {
        this.serveMockData(
            req,
            res,
            500,
            void 0,
            [
                {
                    code: '100100',
                    type: 'ERROR',
                    message: error.message,
                    dataIndex: '',
                },
            ],
            void 0
        );
    }

    serveMockData(req, res, statusCode, info, messages, meta) {
        const data = info && info.hasOwnProperty('$payload') ? info.$payload : info;
        const headers = info && info.hasOwnProperty('$headers') ? info.$headers : {};
        _.forEach(headers, (headerVal, headerKey) => {
            res.set(headerKey, headerVal);
        });
        if (statusCode === 200) {
            res.status(200).send({
                success: true,
                data: data,
                messages: messages,
                metadata: meta,
            });
        } else {
            res.status(200).send({
                success: false,
                data: data,
                messages: messages,
                metadata: meta,
            });
        }
    }

    serveMirror(req, res) {
        const requestBody = req.body;
        this.serveMockData(req, res, 200, requestBody, void 0, void 0);
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

    convertToTree(rows, keyField, parentKeyField) {
        const groupsWithChildren = _.groupBy(rows, parentKeyField);
        const dataAsTree = groupsWithChildren[null];
        this.buildChildren(dataAsTree, groupsWithChildren, keyField);
        return dataAsTree;
    }

    buildChildren(levelRows, groupsWithChildren, keyField, childProperty = 'children') {
        _.forEach(levelRows, (row) => {
            if (groupsWithChildren[row[keyField]]) {
                row[childProperty] = groupsWithChildren[row[keyField]];
                this.buildChildren(row[childProperty], groupsWithChildren, keyField, childProperty);
            }
        });
    }
}

module.exports = new MockLib();
