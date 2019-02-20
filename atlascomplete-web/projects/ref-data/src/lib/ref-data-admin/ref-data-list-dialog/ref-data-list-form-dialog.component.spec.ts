import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDataListFormDialogComponent } from './ref-data-list-form-dialog.component';

describe('RefDataListFormDialogComponent', () => {
  let component: RefDataListFormDialogComponent;
  let fixture: ComponentFixture<RefDataListFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefDataListFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDataListFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
