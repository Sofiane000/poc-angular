import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefDataDetailComponent } from './ref-data-detail.component';

describe('RefDataDetailComponent', () => {
  let component: RefDataDetailComponent;
  let fixture: ComponentFixture<RefDataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefDataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
