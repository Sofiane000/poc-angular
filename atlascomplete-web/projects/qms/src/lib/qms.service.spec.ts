import { TestBed } from '@angular/core/testing';

import { QmsService } from './qms.service';

describe('QmsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QmsService = TestBed.get(QmsService);
    expect(service).toBeTruthy();
  });
});
