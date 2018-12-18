import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasDialogFormTestComponent } from './atlas-dialog-form-test.component';

describe('AtlasDialogFormTestComponent', () => {
  let component: AtlasDialogFormTestComponent;
  let fixture: ComponentFixture<AtlasDialogFormTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasDialogFormTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasDialogFormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
