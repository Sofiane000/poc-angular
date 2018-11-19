import { TestBed } from '@angular/core/testing';

import { DataAccessFactory } from './dataaccess.service';

describe('DataAccessFactory', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataAccessFactory = TestBed.get(DataAccessFactory);
    expect(service).toBeTruthy();
  });

});
