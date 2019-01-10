import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasMultiselectComponent } from './atlas-multiselect.component';

describe('AtlasMultiselectComponent', () => {
    let component: AtlasMultiselectComponent;
    let fixture: ComponentFixture<AtlasMultiselectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AtlasMultiselectComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AtlasMultiselectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
