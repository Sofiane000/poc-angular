import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dist/es2015/dialog/dialog-container.service';
import { AtlasGridService } from '../../atlas-grid/services/atlas-grid.service';
import { AtlasTreeModule } from '../atlas-tree.module';
import { AtlasTreeComponent } from './atlas-tree.component';
import { TREE_DATA, TreeTestService } from './tree-test.service';
describe('AtlasTreeComponent', () => {
    let component: AtlasTreeComponent;
    let fixture: ComponentFixture<AtlasTreeComponent>;
    let service: TreeTestService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AtlasTreeModule, BrowserAnimationsModule],
            providers: [TreeTestService, AtlasGridService, DialogContainerService],
        }).compileComponents();
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [TreeTestService] });
        service = TestBed.get(TreeTestService);
        fixture = TestBed.createComponent(AtlasTreeComponent);
        component = fixture.componentInstance;
        component.treeViewService = service;
        component.children = 'children';
        component.partialData = TREE_DATA;
        component.textFields = 'TenantTaxnmyName';
        component.isTreeViewHierarchyBinding = true;
        component.isTreeViewExpandable = true;
        component.isEditable = true;
        component.isFilterable = true;
        component.menuItems = [
            { text: 'Add Sibling', icon: 'plus' },
            { text: 'Add Child', icon: 'plus' },
        ];
        component.showRefresh = true;
        fixture.autoDetectChanges();
        fixture.detectChanges();
    });

    it('should create atlas tree', () => {
        expect(component).toBeTruthy();
    });
});
