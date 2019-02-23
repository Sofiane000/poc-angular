import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseManagementDialogComponent } from './chase-management-dialog.component';

describe('ChaseManagementDialogComponent', () => {
  let component: ChaseManagementDialogComponent;
  let fixture: ComponentFixture<ChaseManagementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaseManagementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaseManagementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
