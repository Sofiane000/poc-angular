import { TestBed } from '@angular/core/testing';

import { DataAccessFactory } from './dataaccess.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataAccessFactory', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        })
    );

    it('should be created', () => {
        const service: DataAccessFactory = TestBed.get(DataAccessFactory);
        expect(service).toBeTruthy();
    });
});
