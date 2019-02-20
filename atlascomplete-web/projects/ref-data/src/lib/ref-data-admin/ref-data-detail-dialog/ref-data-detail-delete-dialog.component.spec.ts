import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDataDetailDeleteDialogComponent } from './ref-data-detail-delete-dialog.component';

describe('RefDataDetailDeleteDialogComponent', () => {
  let component: RefDataDetailDeleteDialogComponent;
  let fixture: ComponentFixture<RefDataDetailDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefDataDetailDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDataDetailDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
