import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDataListComponent } from './ref-data-list.component';

describe('RefDataListComponent', () => {
  let component: RefDataListComponent;
  let fixture: ComponentFixture<RefDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefDataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
