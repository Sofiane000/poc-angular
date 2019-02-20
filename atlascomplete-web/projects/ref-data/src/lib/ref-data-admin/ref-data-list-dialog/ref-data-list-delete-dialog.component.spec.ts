import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDataListDeleteDialogComponent } from './ref-data-list-delete-dialog.component';

describe('RefDataListDeleteDialogComponent', () => {
  let component: RefDataListDeleteDialogComponent;
  let fixture: ComponentFixture<RefDataListDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefDataListDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDataListDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
