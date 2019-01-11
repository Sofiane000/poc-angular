import { inject, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataAccessFactory } from './dataaccess.service';

describe('DataAccessFactory', () => {
    let service: DataAccessFactory;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
        });
        service = TestBed.get(DataAccessFactory);
        service.baseUrl = 'api';
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be able to create a service endpoint', () => {
        service
            .createService('idm.users')
            .module('idm')
            .url('users/list');
        // tslint:disable-next-line:only-arrow-functions
        expect(function() {
            service.getService('idm.users');
        }).not.toThrow();
    });

    it('should return to create a service data client', () => {
        service
            .createService('idm.members')
            .module('idm')
            .url('users/list');
        expect(service.getService('idm.users')).toBeDefined();
    });

    describe('Should perform get operations', () => {
        beforeEach(() => {
            service
                .createService('idm.users')
                .module('idm')
                .url('users/list');
        });
    });
});
