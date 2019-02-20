import { TestBed } from '@angular/core/testing';

import { RefDataDetailService } from './ref-data-detail.service';

describe('RefDataDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefDataDetailService = TestBed.get(RefDataDetailService);
    expect(service).toBeTruthy();
  });
});
