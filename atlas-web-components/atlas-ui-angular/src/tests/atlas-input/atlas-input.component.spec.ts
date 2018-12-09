import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasInputComponent } from '../../lib/atlas-input/components/atlas-input.component';
import { AtlasInputModule } from '../../lib/atlas-input/atlas-input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
