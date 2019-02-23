import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseMemberSearchFormComponent } from './chase-member-search-form.component';

describe('ChaseMemberSearchFormComponent', () => {
  let component: ChaseMemberSearchFormComponent;
  let fixture: ComponentFixture<ChaseMemberSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaseMemberSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseMemberSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
