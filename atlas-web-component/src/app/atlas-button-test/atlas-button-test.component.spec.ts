import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasButtonTestComponent } from './atlas-button-test.component';

describe('AtlasButtonTestComponent', () => {
    let component: AtlasButtonTestComponent;
    let fixture: ComponentFixture<AtlasButtonTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AtlasButtonTestComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AtlasButtonTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
