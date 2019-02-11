const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const mockConfig = require('./config');

class MockLib {
    async saveMock(pathToMock, data) {
        const dataToSave = JSON.stringify(data.$payload, void 0, 4);
        return new Promise((resolve, reject) => {
            fs.writeFile(mockConfig.baseFolder + pathToMock, dataToSave, (err, data) => {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(data);
                }
            });
        });
    }

    async loadMock(pathToMock, req, filterCb) {
        let rawMockData = await this.__loadMock(mockConfig.baseFolder + pathToMock);
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
        return this.loadMock(pathToMock, req, null).then(
            (data) => {
                data.$payload = this.convertToTree(data.$payload, keyField, parentKeyField);
                return this.serveSuccess(req, res, data);
            },
            (error) => this.serveFailed(req, res, error)
        );
    }

    createMock(req, res, pathToMock, saveResult) {
        const createPayload = _.isArray(req.body) ? req.body : [req.body];
        return this.loadMock(pathToMock, req).then(
            async (data) => {
                _.forEach(createPayload, (createRow) => {
                    data.$payload.push(createRow);
                });
                if (saveResult) {
                    await this.saveMock(pathToMock, data);
                }
                return this.serveSuccess(req, res, data);
            },
            (error) => this.serveFailed(req, res, error)
        );
    }

    updateMock(req, res, idField, pathToMock, saveResult) {
        const updatePayload = _.isArray(req.body) ? req.body : [req.body];
        return this.loadMock(pathToMock, req).then(
            async (data) => {
                for (const mockRow of data.$payload) {
                    const idFieldValue = mockRow[idField];
                    let updateRow = _.find(updatePayload, (updateRow) => {
                        return updateRow[idField] == idFieldValue;
                    });
                    if (updateRow) {
                        _.extend(mockRow, updateRow);
                    }
                }
                if (saveResult) {
                    await this.saveMock(pathToMock, data);
                }
                return this.serveSuccess(req, res, data);
            },
            (error) => this.serveFailed(req, res, error)
        );
    }

    deleteMock(req, res, idField, pathToMock, saveResult) {
        let deletePayload;
        if (req.params && req.params[idField]) {
            deletePayload = [{}];
            deletePayload[0][idField] = req.params[idField];
        } else {
            deletePayload = _.isArray(req.body) ? req.body : [req.body];
        }
        return this.loadMock(pathToMock, req).then(
            async (data) => {
                for (let idx = data.$payload.length - 1; idx >= 0; idx--) {
                    const mockRow = data.$payload[idx];
                    const idFieldValue = mockRow[idField];
                    let deleteRow = _.find(deletePayload, (deleteRow) => {
                        return deleteRow[idField] == idFieldValue;
                    });
                    if (deleteRow) {
                        data.$payload.splice(idx, 1);
                    }
                }
                if (saveResult) {
                    await this.saveMock(pathToMock, data);
                }
                return this.serveSuccess(req, res, data);
            },
            (error) => this.serveFailed(req, res, error)
        );
    }

    serveMock(req, res, pathToMock, filterCb) {
        return this.loadMock(pathToMock, req, filterCb).then(
            (data) => this.serveSuccess(req, res, data),
            (error) => this.serveFailed(req, res, error)
        );
    }

    serveMockById(req, res, pathToMock, idField, idValue) {
        return this.loadMock(pathToMock, req, null).then(
            (data) => {
                data.$payload = _.find(data.$payload, (entry) => {
                    return entry[idField] == idValue;
                });
                return this.serveSuccess(req, res, data);
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
