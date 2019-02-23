import { TestBed } from '@angular/core/testing';

import { ChaseService } from './chase.service';

describe('ChaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChaseService = TestBed.get(ChaseService);
    expect(service).toBeTruthy();
  });
});
