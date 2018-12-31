import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasToolbarTestComponent } from './atlas-toolbar-test.component';

describe('AtlasToolbarTestComponent', () => {
  let component: AtlasToolbarTestComponent;
  let fixture: ComponentFixture<AtlasToolbarTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasToolbarTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasToolbarTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
