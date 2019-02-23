import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseManagementComponent } from './chase-management.component';

describe('ChaseManagementComponent', () => {
  let component: ChaseManagementComponent;
  let fixture: ComponentFixture<ChaseManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaseManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
