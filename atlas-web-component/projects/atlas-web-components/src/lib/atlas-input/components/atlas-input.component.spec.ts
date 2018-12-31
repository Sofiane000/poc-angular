import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtlasInputComponent } from './atlas-input.component';
import { AtlasInputModule } from '../atlas-input.module';

describe('AtlasInputComponent', () => {
    let component: AtlasInputComponent;
    let fixture: ComponentFixture<AtlasInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AtlasInputModule, BrowserAnimationsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AtlasInputComponent);
        component = fixture.componentInstance;
        component.label = 'Test Button';
        component.width = '100%';
        component.required = true;
        fixture.autoDetectChanges();
        fixture.detectChanges();
    });

    it('should create atlas button', () => {
        expect(component).toBeTruthy();
    });
});
