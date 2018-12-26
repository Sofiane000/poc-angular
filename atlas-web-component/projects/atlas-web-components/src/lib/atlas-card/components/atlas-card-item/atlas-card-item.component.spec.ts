import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasCardItemComponent } from './atlas-card-item.component';

describe('AtlasCardItemComponent', () => {
  let component: AtlasCardItemComponent;
  let fixture: ComponentFixture<AtlasCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
