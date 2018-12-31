import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasInputTestComponent } from './atlas-input-test.component';

describe('AtlasInputTestComponent', () => {
  let component: AtlasInputTestComponent;
  let fixture: ComponentFixture<AtlasInputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasInputTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasInputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
