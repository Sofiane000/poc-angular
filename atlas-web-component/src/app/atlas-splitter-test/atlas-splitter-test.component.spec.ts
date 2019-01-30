import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasSplitterTestComponent } from './atlas-splitter-test.component';

describe('AtlasSplitterTestComponent', () => {
    let component: AtlasSplitterTestComponent;
    let fixture: ComponentFixture<AtlasSplitterTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AtlasSplitterTestComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AtlasSplitterTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
