const mockLib = require('../../mock/lib');
const config = require('../../mock/config');
const updateMock = require('../mocks/update.mock.lib.data.json');
const createMock = require('../mocks/create.mock.lib.data.json');
const _ = require('lodash');

describe('Mocking library', () => {
    let request;
    let response;

    beforeEach(() => {
        config.baseFolder = './spec/mocks/';
        request = {
            get: function(header) {},
        };
        response = {
            mockStatus: void 0,
            mockBody: void 0,
            mockHeaders: {},
            set: function(key, value) {
                this.mockHeaders[key] = value;
                return this;
            },
            status: function(code) {
                this.mockStatus = code;
                return this;
            },
            send: function(body) {
                this.mockBody = body;
                return this;
            },
        };
        jasmine.createSpyObj('response', ['status']);
    });

    it('should be defined', () => {
        expect(mockLib).toBeDefined();
    });

    it('should serve mocks', async () => {
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockStatus).toBe(200);
        expect(response.mockBody).toBeDefined();
        expect(response.mockBody.success).toBe(true);
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.messages).toBeDefined();
        expect(response.mockBody.metadata).toBeUndefined();
    });

    it('should update row in mock', async () => {
        request.body = updateMock;
        await mockLib.updateMock(request, response, 'rowNum', 'mock.lib.data.json');
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 1;
        });
        expect(updatedResult).toBeDefined();
        expect(response.mockBody.data.length).toBe(10);
        expect(updatedResult.taskName).toBe(updateMock.taskName);
        expect(updatedResult.performer).toBe(updateMock.performer);
        expect(updatedResult.dueDate).toBe(updateMock.dueDate);
    });

    it('should update row in mock (no-save)', async () => {
        request.body = updateMock;
        spyOn(mockLib, 'saveMock');
        await mockLib.updateMock(request, response, 'rowNum', 'mock.lib.data.json', false);
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 1;
        });
        expect(updatedResult).toBeDefined();
        expect(mockLib.saveMock).not.toHaveBeenCalled();
    });

    it('should update row in mock (with-save)', async () => {
        request.body = updateMock;
        spyOn(mockLib, 'saveMock');
        await mockLib.updateMock(request, response, 'rowNum', 'mock.lib.data.json', true);
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 1;
        });
        expect(updatedResult).toBeDefined();
        expect(mockLib.saveMock).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Object));
    });

    it('should create row in mock', async () => {
        request.body = createMock;
        await mockLib.createMock(request, response, 'mock.lib.data.json');
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 11;
        });
        expect(updatedResult).toBeDefined();
        expect(response.mockBody.data.length).toBe(11);
        expect(updatedResult.taskName).toBe(createMock.taskName);
        expect(updatedResult.performer).toBe(createMock.performer);
        expect(updatedResult.dueDate).toBe(createMock.dueDate);
    });

    it('should create row in mock (no-save)', async () => {
        request.body = createMock;
        spyOn(mockLib, 'saveMock');
        await mockLib.createMock(request, response, 'mock.lib.data.json', false);
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 11;
        });
        expect(updatedResult).toBeDefined();
        expect(mockLib.saveMock).not.toHaveBeenCalled();
    });

    it('should create row in mock (with-save)', async () => {
        request.body = createMock;
        spyOn(mockLib, 'saveMock');
        await mockLib.createMock(request, response, 'mock.lib.data.json', true);
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 11;
        });
        expect(updatedResult).toBeDefined();
        expect(mockLib.saveMock).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Object));
    });

    it('should create delete row from mock (parameter based)', async () => {
        request.params = { rowNum: 1 };
        await mockLib.deleteMock(request, response, 'rowNum', 'mock.lib.data.json', false);
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 1;
        });
        expect(updatedResult).not.toBeDefined();
        expect(response.mockBody.data.length).toBe(9);
    });

    it('should create delete row from mock (body based)', async () => {
        request.body = updateMock;
        await mockLib.deleteMock(request, response, 'rowNum', 'mock.lib.data.json', false);
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 1;
        });
        expect(updatedResult).not.toBeDefined();
        expect(response.mockBody.data.length).toBe(9);
    });

    it('should create row in mock (with-save)', async () => {
        request.body = updateMock;
        spyOn(mockLib, 'saveMock');
        await mockLib.deleteMock(request, response, 'rowNum', 'mock.lib.data.json', true);
        const updatedResult = _.find(response.mockBody.data, (row) => {
            return row.rowNum === 1;
        });
        expect(updatedResult).not.toBeDefined();
        expect(mockLib.saveMock).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(Object));
    });
});
