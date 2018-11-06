import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExampleComponent } from '../../app/button/button-example/button-example.component';
import { ButtonModule } from 'src/app/button/button.module';
import { AtlasButtonComponent } from 'atlas-ui-angular';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ButtonExampleComponent', () => {
  let component: ButtonExampleComponent;
  let fixture: ComponentFixture<ButtonExampleComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ButtonModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExampleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.autoDetectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check count of event on remove', () => {
    fixture.componentInstance.onRemoveClick();
    expect(fixture.componentInstance.events.length).toEqual(0);
  });

  it('should check if emitted value is same in button', (done) => {
    const child = new AtlasButtonComponent();
    child.btnClick.subscribe(g => {
      expect(g).toEqual({});
      done();
    });
    child.onButtonClick({});
  });

  it('should add to event on blur', () => {
    fixture.componentInstance.onBlurFocus('Blur event');
    expect(fixture.componentInstance.events.length).toEqual(1);
  });
  it('should add to event on focus', () => {
    fixture.componentInstance.onBlurFocus('Focus event');
    expect(fixture.componentInstance.events.length).toEqual(1);
  });
});
