import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDataDetailFormDialogComponent } from './ref-data-detail-form-dialog.component';

describe('RefDataDetailFormDialogComponent', () => {
  let component: RefDataDetailFormDialogComponent;
  let fixture: ComponentFixture<RefDataDetailFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefDataDetailFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDataDetailFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
