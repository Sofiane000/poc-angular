import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChaseStatusFormComponent } from './update-chase-status-form.component';

describe('UpdateChaseStatusFormComponent', () => {
  let component: UpdateChaseStatusFormComponent;
  let fixture: ComponentFixture<UpdateChaseStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChaseStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChaseStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
