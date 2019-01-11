import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { ComponentSecurity } from 'atlas-web-services/public_api';
import { ComponentSecurityService } from './component.security.service';

describe('DataAccessFactory', () => {
    let data;
    let service: ComponentSecurityService;

    beforeEach(() => {
        data = require('../../../../../../atlascomplete-web/mocks/idm/components/user.components.json');
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.get(ComponentSecurityService);
        service.loadSecurityMap(data);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return valid security object', () => {
        expect(service.getSecurity('sample-button')).toBeDefined();
    });

    it('should return default permissions', () => {
        const compSec: ComponentSecurity = service.getSecurity('5098=w4sdxv-32');
        expect(compSec.cmpntSK).toEqual(-1);
        expect(compSec.canRead).toBeTruthy();
        expect(compSec.canCreate).toBeTruthy();
        expect(compSec.canDelete).toBeTruthy();
        expect(compSec.canExecute).toBeTruthy();
        expect(compSec.canModify).toBeTruthy();
        expect(compSec.isMasked).not.toBeTruthy();
    });

    it('should return all false permissions', () => {
        const compSec: ComponentSecurity = service.getSecurity('sample-button');
        expect(compSec.canRead).not.toBeTruthy();
        expect(compSec.canCreate).not.toBeTruthy();
        expect(compSec.canDelete).not.toBeTruthy();
        expect(compSec.canExecute).not.toBeTruthy();
        expect(compSec.canModify).not.toBeTruthy();
        expect(compSec.isMasked).not.toBeTruthy();
    });

    it('should return correct permissions', () => {
        const compSec: ComponentSecurity = service.getSecurity('print-button');
        expect(compSec.canRead).toBeTruthy();
        expect(compSec.canCreate).not.toBeTruthy();
        expect(compSec.canDelete).not.toBeTruthy();
        expect(compSec.canExecute).toBeTruthy();
        expect(compSec.canModify).not.toBeTruthy();
        expect(compSec.isMasked).not.toBeTruthy();
    });

    it('should return all true permissions', () => {
        const compSec: ComponentSecurity = service.getSecurity('test-button');
        expect(compSec.canRead).toBeTruthy();
        expect(compSec.canCreate).toBeTruthy();
        expect(compSec.canDelete).toBeTruthy();
        expect(compSec.canExecute).toBeTruthy();
        expect(compSec.canModify).toBeTruthy();
        expect(compSec.isMasked).toBeTruthy();
    });
});
