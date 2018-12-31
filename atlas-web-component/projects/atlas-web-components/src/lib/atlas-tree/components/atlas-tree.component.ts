import {
    Component,
    ViewChild,
    Input,
    Output,
    EventEmitter,
    OnInit,
} from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { TreeViewComponent, ItemLookup } from '@progress/kendo-angular-treeview';
import { AtlasToolbarComponent } from '../../atlas-toolbar/components/atlas-toolbar.component';
import {
    MultiRowSelection,
    MultiRowComponent,
    Selectable,
} from '../../shared/multi-row-component/multi-row-component.service';
import { AtlasGridService } from '../../atlas-grid/services/atlas-grid.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'atlas-tree',
    templateUrl: './atlas-tree.component.html',
    styleUrls: ['./atlas-tree.component.scss'],
})
export class AtlasTreeComponent implements OnInit, MultiRowComponent {
    canAdd: boolean;
    canEdit: boolean;
    canDelete: boolean;
    expandedKeys: any[] = ['0'];
    selectedKeys: [] = [];
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

    @Output() remove: EventEmitter<any> = new EventEmitter<any>();
    @Output() edit: EventEmitter<any> = new EventEmitter<any>();
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
    selectBy(e) {
        return e.dataItem;
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
