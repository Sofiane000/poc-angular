import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasGridTestComponent } from './atlas-grid-test.component';

describe('AtlasGridTestComponent', () => {
    let component: AtlasGridTestComponent;
    let fixture: ComponentFixture<AtlasGridTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AtlasGridTestComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AtlasGridTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
