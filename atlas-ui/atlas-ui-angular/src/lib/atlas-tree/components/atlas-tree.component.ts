import {
    Component, ViewChild, Input, Output, EventEmitter
} from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';
import { TreeViewComponent } from '@progress/kendo-angular-treeview';
@Component({
    selector: 'atlas-tree',
    templateUrl: './atlas-tree.component.html',
    styleUrls: ['./atlas-tree.component.css'],
})
export class AtlasTreeComponent {
    contextItem: any;
    @ViewChild('treemenu')
    gridContextMenu: ContextMenuComponent;
    @ViewChild(TreeViewComponent)
    treeViewComponent: TreeViewComponent;
    @Input() data: any[];
    @Input() showToolbar: boolean;
    @Input() isEditable: boolean;
    @Input() showRefresh: boolean;
    @Input() isFilterable: boolean;
    @Input() filterValue: boolean;
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
    onFilterSubmit() {
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
}
