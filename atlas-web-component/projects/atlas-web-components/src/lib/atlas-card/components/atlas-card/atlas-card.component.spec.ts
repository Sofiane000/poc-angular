import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasCardComponent } from './atlas-card.component';

describe('AtlasCardComponent', () => {
  let component: AtlasCardComponent;
  let fixture: ComponentFixture<AtlasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
