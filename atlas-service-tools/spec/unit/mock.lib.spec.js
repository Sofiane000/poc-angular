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
            mockHeaders: {},
            get: function(header) {
                return this.mockHeaders[header];
            },
            set: function(header, value) {
                this.mockHeaders[header] = value;
            },
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

    it('should not sort result', async () => {
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data[0].rowNum).toEqual(2);
    });

    it('should sort result ascending', async () => {
        request.set('sort', '[{"property": "rowNum", "direction": "asc"}]');
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data[0].rowNum).toEqual(1);
    });

    it('should sort result descending', async () => {
        request.set('sort', '[{"property": "rowNum", "direction": "desc"}]');
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data[0].rowNum).toEqual(10);
    });

    it('should sort by mutliple fields in different directions', async () => {
        request.set(
            'sort',
            '[{"property": "taskId", "direction": "asc"},{"property": "rowNum", "direction": "desc"}]'
        );
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data[0].taskId).toEqual(3240);
        expect(response.mockBody.data[0].rowNum).toEqual(9);
    });

    it('should filter using equal operator', async () => {
        request.set(
            'filter',
            '[{"operator": "eq", "value": 7, "property": "rowNum", "dataType": "character"}]'
        );
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data.length).toEqual(1);
        expect(response.mockBody.data[0].rowNum).toEqual(7);
    });

    it('should filter using not-equal operator', async () => {
        request.set(
            'filter',
            '[{"operator": "ne", "value": 2, "property": "rowNum", "dataType": "character"}]'
        );
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data.length).toEqual(9);
        expect(response.mockBody.data[0].rowNum).toEqual(1);
    });

    it('should filter using greater than operator', async () => {
        request.set(
            'filter',
            '[{"operator": "gt", "value": 2, "property": "rowNum", "dataType": "character"}]'
        );
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data.length).toEqual(8);
        expect(response.mockBody.data[0].rowNum).toEqual(3);
    });

    it('should filter using greater than or equal operator', async () => {
        request.set(
            'filter',
            '[{"operator": "ge", "value": 2, "property": "rowNum", "dataType": "character"}]'
        );
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data.length).toEqual(9);
        expect(response.mockBody.data[0].rowNum).toEqual(2);
    });

    it('should filter using less than operator', async () => {
        request.set(
            'filter',
            '[{"operator": "lt", "value": 2, "property": "rowNum", "dataType": "character"}]'
        );
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data.length).toEqual(1);
        expect(response.mockBody.data[0].rowNum).toEqual(1);
    });

    it('should filter using less than or equal operator', async () => {
        request.set(
            'filter',
            '[{"operator": "le", "value": 2, "property": "rowNum", "dataType": "character"}]'
        );
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data.length).toEqual(2);
        expect(response.mockBody.data[0].rowNum).toEqual(2);
    });

    it('should filter using like operator', async () => {
        request.set(
            'filter',
            '[{"operator": "like", "value": "*Error*", "property": "taskTitle", "dataType": "character"}]'
        );
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data.length).toEqual(2);
        expect(response.mockBody.data[0].taskTitle).toEqual('Acknowledge Error Invoice');
        expect(response.mockBody.data[1].taskTitle).toEqual('Acknowledge Error Invoice');
    });

    it('should filter and sort', async () => {
        request.set(
            'filter',
            '[{"operator": "like", "value": "*Error*", "property": "taskTitle", "dataType": "character"}]'
        );
        request.set('sort', '[{"property": "rowNum", "direction": "asc"}]');
        await mockLib.serveMock(request, response, 'mock.lib.data.json');
        expect(response.mockBody.data).toBeDefined();
        expect(response.mockBody.data.length).toEqual(2);
        expect(response.mockBody.data[0].taskTitle).toEqual('Acknowledge Error Invoice');
        expect(response.mockBody.data[0].rowNum).toEqual(1);
    });
});
