import {
    Component, ViewChild, Input, Output, EventEmitter, OnInit
} from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { TreeViewComponent, ItemLookup } from '@progress/kendo-angular-treeview';
import { AtlasToolbarComponent } from '../../atlas-toolbar/components/atlas-toolbar.component';
@Component({
    selector: 'atlas-tree',
    templateUrl: './atlas-tree.component.html',
    styleUrls: ['./atlas-tree.component.scss'],
})
export class AtlasTreeComponent implements OnInit {
    expandedKeys: any[] = ['0'];
    contextItem: any;
    @ViewChild('treemenu')
    gridContextMenu: ContextMenuComponent;
    @ViewChild(TreeViewComponent)
    treeViewComponent: TreeViewComponent;
    @ViewChild(AtlasToolbarComponent)
    toolbarComponent: AtlasToolbarComponent;
    @Input() data: any[];
    partialData: any[] = [];
    @Input() showToolbar: boolean;
    @Input() isEditable: boolean;
    @Input() showRefresh: boolean;
    @Input() isFilterable: boolean;
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
    @Output() nodeClick: EventEmitter<any> = new EventEmitter<any>();

    constructor() {

    }
    ngOnInit(): void {
        this.partialData = this.data.map(item => item);
    }

    onNodeClick(event: any): void {
        const originalEvent = event.originalEvent;
        originalEvent.preventDefault();
        this.contextItem = event.item.dataItem;
        this.nodeClick.emit();
    }
    onAddSelect({ item }): void {
        this.addMenuSelect.emit(item);
    }
    addClicked(event) {
        event.preventDefault();
        this.gridContextMenu.show({ left: event.pageX, top: event.pageY });
    }

    iconClass(dataItem): any {
        return {
            'fa-database': dataItem['TenantTaxnmyType'] === 'Tenant' ? true : false,
            'fa-folder': dataItem['TenantTaxnmyType'] === 'Acct' ? true : false,
            'fa-file': dataItem['TenantTaxnmyType'] === 'Grp' ? true : false,
            'fa-file-text ': dataItem['TenantTaxnmyType'] === 'PopGrp' ? true : false,
            'fa-globe': dataItem['TenantTaxnmyType'] === 'Global' ? true : false,
            'fa': true
        };
    }
}
