import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtlasTreeModule } from '../../lib/atlas-tree/atlas-tree.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtlasTreeComponent } from '../../lib/atlas-tree/components/atlas-tree.component';
import { TreeTestService, TREE_DATA } from './tree-test.service';
import { AtlasGridService } from '../../lib/atlas-grid/services/atlas-grid.service';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dist/es2015/dialog/dialog-container.service';
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
