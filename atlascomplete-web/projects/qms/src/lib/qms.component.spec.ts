import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QmsComponent } from './qms.component';

describe('QmsComponent', () => {
  let component: QmsComponent;
  let fixture: ComponentFixture<QmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
