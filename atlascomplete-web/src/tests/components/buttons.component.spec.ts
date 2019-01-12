import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtlasButtonComponent } from '@atlas/web-components';
import { ComponentsModule } from 'src/app/modules/prod-admin/components/components.module';
import { ButtonExampleComponent } from 'src/app/modules/prod-admin/components/components/button-example/button-example.component';

describe('ButtonExampleComponent', () => {
    let component: ButtonExampleComponent;
    let fixture: ComponentFixture<ButtonExampleComponent>;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ComponentsModule, BrowserAnimationsModule],
        }).compileComponents();
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
        child.btnClick.subscribe((g) => {
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
