import { TestBed } from '@angular/core/testing';

import { ChaseMembersService } from './chase-members.service';

describe('ChaseMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChaseMembersService = TestBed.get(ChaseMembersService);
    expect(service).toBeTruthy();
  });
});
