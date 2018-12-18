import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasTreeTestComponent } from './atlas-tree-test.component';

describe('AtlasTreeTestComponent', () => {
  let component: AtlasTreeTestComponent;
  let fixture: ComponentFixture<AtlasTreeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasTreeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasTreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
