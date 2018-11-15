import {
    Component, ViewChild, Input, Output, EventEmitter, OnInit
} from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { TreeViewComponent, ItemLookup } from '@progress/kendo-angular-treeview';
@Component({
    selector: 'atlas-tree',
    templateUrl: './atlas-tree.component.html',
    styleUrls: ['./atlas-tree.component.css'],
})
export class AtlasTreeComponent implements OnInit {
    expandedKeys: any[] = ['0'];
    contextItem: any;
    @ViewChild('treemenu')
    gridContextMenu: ContextMenuComponent;
    @ViewChild(TreeViewComponent)
    treeViewComponent: TreeViewComponent;
    @Input() data: any[];
    partialData: any[] = [];
    @Input() showToolbar: boolean;
    @Input() isEditable: boolean;
    @Input() showRefresh: boolean;
    @Input() isFilterable: boolean;
    filterValue: string;
    @Input() menuItems: any[];
    @Input() isTreeViewExpandable: boolean;
    @Input() isTreeViewHierarchyBinding: boolean;
    @Input() textFields;
    @Input() children;
    @Input() hasChildren;
    @Output() remove: EventEmitter<any> = new EventEmitter<any>();
    @Output() edit: EventEmitter<any> = new EventEmitter<any>();
    @Output() addMenuSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() refresh: EventEmitter<any> = new EventEmitter<any>();
    constructor() {

    }
    ngOnInit(): void {
        this.partialData = this.data.map(item => item);
    }
    onSearchClose() {
        this.filterValue = '';
        this.onFilterSubmit();
    }
    onFilterSubmit() {
        this.partialData = this.search(this.data, this.filterValue);
        if (this.filterValue && this.filterValue.trim().length > 0) {
            const lookupService = (<any>this.treeViewComponent).treeViewLookupService;
            if (!lookupService || !lookupService.map) {
                throw new Error('Could not access internal tree view lookup service.');
            }
            const map: Map<string, ItemLookup> = lookupService.map;
            const mapValues = Array.from(map.keys()); // ts workaround
            this.expandedKeys = mapValues;
        } else {
            this.expandedKeys = ['0'];
        }

    }
    public search(children: any[], term: string): any[] {

        return children.reduce((acc, child) => {
            if (this.contains(child[this.textFields], term)) {
                acc.push(child);
            } else if (child.children && child.children.length > 0) {
                const newChildren = this.search(child.children, term);
                if (newChildren.length > 0) {
                    const newObj = Object.assign({}, child);
                    newObj.children = [];
                    newObj.children = newChildren;
                    acc.push(newObj);
                }
            }
            return acc;
        }, []);
    }

    onNodeClick(event: any): void {
        const originalEvent = event.originalEvent;
        originalEvent.preventDefault();
        this.contextItem = event.item.dataItem;
    }
    onAddSelect({ item }): void {
        this.addMenuSelect.emit(item);
    }
    addClicked(event) {
        event.preventDefault();
        this.gridContextMenu.show({ left: event.pageX, top: event.pageY });
    }
    removeClicked() {
        this.remove.emit();
    }
    editClicked() {
        this.edit.emit();
    }
    refreshClicked() {
        this.refresh.emit();
    }
    iconClass(dataItem): any {
        return {
            'k-i-aggregate-fields': dataItem['TenantTaxnmyType'] === 'Tenant' ? true : false,
            'k-i-folder': dataItem['TenantTaxnmyType'] === 'Acct' ? true : false,
            'k-i-file': dataItem['TenantTaxnmyType'] === 'Grp' ? true : false,
            'k-i-file-txt': dataItem['TenantTaxnmyType'] === 'PopGrp' ? true : false,
            'k-i-globe-outline': dataItem['TenantTaxnmyType'] === 'Global' ? true : false,
            'k-icon': true
        };
    }
    private contains(textFields: string, term: string): boolean {
        return textFields.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    }
}
