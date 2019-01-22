import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { TreeViewComponent } from '@progress/kendo-angular-treeview';
import { Subscription } from 'rxjs';
import { AtlasGridService } from '../../atlas-grid/services/atlas-grid.service';
import { AtlasToolbarComponent } from '../../atlas-toolbar/components/atlas-toolbar.component';
import {
    IMultiRowComponent,
    MultiRowSelection,
    Selectable,
} from '../../shared/multi-row-component/multi-row-component.service';
@Component({
    selector: 'atlas-tree',
    templateUrl: './atlas-tree.component.html',
    styleUrls: ['./atlas-tree.component.scss'],
})
export class AtlasTreeComponent implements OnInit, IMultiRowComponent {
    canAdd: boolean;
    canEdit: boolean;
    canDelete: boolean;
    @Input()
    expandedKeys: any[] = ['0'];
    @Input()
    selectedKeys: [] = [];
    @Input()
    selectBy: any;
    contextItem: any;
    treeServiceSubscription: Subscription;
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
    @Input() selectable: Selectable;
    @Input() treeViewService: AtlasGridService;

    @Output() dblClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() addMenuSelect: EventEmitter<any> = new EventEmitter<any>();
    @Output() refresh: EventEmitter<any> = new EventEmitter<any>();
    @Output() selectionChange: EventEmitter<MultiRowSelection> = new EventEmitter<
        MultiRowSelection
    >();

    constructor() {}

    ngOnInit(): void {
        this.treeViewService.query({});
        this.treeServiceSubscription = this.treeViewService.subscribe((data) => {
            if (data) {
                this.partialData = data.map((item) => item);
            }
        });
    }

    onNodeClick(event: any): void {
        const originalEvent = event.originalEvent;
        originalEvent.preventDefault();
        this.contextItem = event.item.dataItem;
    }

    dblClickHandler(event) {
        const originalEvent = event.originalEvent;
        originalEvent.preventDefault();
        this.dblClick.emit(event.item.dataItem);
    }

    onAddSelect({ item }): void {
        this.addMenuSelect.emit(item);
    }

    addClicked(event) {
        event.preventDefault();
        this.gridContextMenu.show({ left: event.pageX, top: event.pageY });
    }

    handleSelection(event) {
        setTimeout(() => {
            this.selectionChange.emit({
                selectedRows: this.selectedKeys,
                selectedRowIdx: event.index,
            });
        }, 100);
    }

    iconClass(dataItem): any {
        return {
            'fa-database': dataItem['TenantTaxnmyType'] === 'Tenant' ? true : false,
            // tslint:disable-next-line:max-line-length
            'fa-folder':
                dataItem['TenantTaxnmyType'] === 'Acct' ||
                dataItem['MenuName'] === 'Administration' ||
                dataItem['MenuName'] === 'Finance Services'
                    ? true
                    : false,
            // tslint:disable-next-line:max-line-length
            'fa-file':
                dataItem['TenantTaxnmyType'] === 'Grp' ||
                (dataItem['MenuName'] !== '' &&
                    dataItem['MenuName'] !== 'Administration' &&
                    dataItem['MenuName'] !== 'Finance Services')
                    ? true
                    : false,
            'fa-file-text ': dataItem['TenantTaxnmyType'] === 'PopGrp' ? true : false,
            'fa-globe': dataItem['TenantTaxnmyType'] === 'Global' ? true : false,
            fa: true,
        };
    }
}
