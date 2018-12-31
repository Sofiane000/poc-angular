import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasDocViewerTestComponent } from './atlas-doc-viewer-test.component';

describe('AtlasDocViewerTestComponent', () => {
  let component: AtlasDocViewerTestComponent;
  let fixture: ComponentFixture<AtlasDocViewerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlasDocViewerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasDocViewerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
