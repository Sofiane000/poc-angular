import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasButtonComponent } from '../../lib/atlas-button/components/atlas-button.component';
import { AtlasButtonModule } from '../../lib/atlas-button/atlas-button.module';

describe('AtlasButtonComponent', () => {
  let component: AtlasButtonComponent;
  let fixture: ComponentFixture<AtlasButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AtlasButtonModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlasButtonComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create atlas button', () => {
    expect(component).toBeTruthy();
  });

  it('should check if button click method is called', async(() => {
    spyOn(<any>AtlasButtonComponent.prototype, 'onButtonClick');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onButtonClick).toHaveBeenCalled();
    });
  }));
});
