import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignWorkQueueFormComponent } from './assign-work-queue-form.component';

describe('AssignWorkQueueFormComponent', () => {
  let component: AssignWorkQueueFormComponent;
  let fixture: ComponentFixture<AssignWorkQueueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignWorkQueueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignWorkQueueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
