import { TestBed } from '@angular/core/testing';

import { ChaseProviderService } from './chase-provider.service';

describe('ChaseProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChaseProviderService = TestBed.get(ChaseProviderService);
    expect(service).toBeTruthy();
  });
});
