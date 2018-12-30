import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasCardFieldComponent } from './atlas-card-field.component';

describe('AtlasCardFieldComponent', () => {
    let component: AtlasCardFieldComponent;
    let fixture: ComponentFixture<AtlasCardFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AtlasCardFieldComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AtlasCardFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
