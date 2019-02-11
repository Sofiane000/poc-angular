import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import {
    AtlasToolbarComponent,
    AtlasTreeComponent,
    ButtonAction,
    IAtlasToolbarButton,
} from '@atlas/web-components';
import { MenusDeleteDialogComponent } from '../menus-delete-dialog/menus-delete-dialog.component';
import { MenusService } from '../shared/menus.service';
@Component({
    selector: 'app-menus-tree',
    templateUrl: './menus-tree.component.html',
})
export class MenusTreeComponent implements OnInit, AfterViewChecked {
    treeData: any[] = [];
    menuItems: any[] = [{ text: 'Add Sibling', icon: 'plus' }, { text: 'Add Child', icon: 'plus' }];
    @ViewChild(AtlasTreeComponent) treeView: AtlasTreeComponent;
    @ViewChild(AtlasToolbarComponent) toolbar: AtlasToolbarComponent;
    isFilterable: boolean;
    isEditable: boolean;
    children = 'children';
    treeItems: any[] = [];
    isSibling: boolean;
    buttons: IAtlasToolbarButton[] = [];

    constructor(
        private dialogService: MatDialog,
        public menuService: MenusService,
        private router: Router,
        private cdRef: ChangeDetectorRef
    ) {
        this.menuService.getSaveSubject().subscribe((response) => {
            this.saveTenantFromDialog(response.isAdd, response.data);
        });
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }

    ngOnInit(): void {
        this.menuService.subscribe((treeData) => {
            this.treeData = treeData;
        });
    }

    refresh() {
        this.menuService.getMenus().subscribe((treeData) => {
            this.treeView.partialData = treeData.map((item) => item);
        });
    }

    editHandler(event) {
        this.showAddEditDialog(this.treeView.contextItem);
    }

    showAddEditDialog(dataItem: any) {
        const isNew = dataItem ? false : true;
        this.router.navigate(['idm/menus/action/' + (isNew ? 'add' : 'edit/' + dataItem.MenuSK)]);
    }

    addHandler(event) {
        if (event.text === 'Add Sibling') {
            if (this.treeView.contextItem) {
                this.isSibling = true;
                this.showAddEditDialog(null);
            }
        } else {
            this.isSibling = false;
            this.showAddEditDialog(null);
        }
    }

    removeItem(dataItem: any, items: any[]): void {
        const index = items.indexOf(dataItem);
        if (index >= 0) {
            items.splice(index, 1);
        } else {
            items.forEach((item) => {
                if (item.children) {
                    this.removeItem(dataItem, item.children);
                }
            });
        }
    }

    addItem(dataItem: any, items: any[], itemToPush) {
        const index = items.indexOf(dataItem);
        if (index >= 0) {
            items.push(itemToPush);
        } else {
            items.forEach((item) => {
                if (item.children) {
                    this.addItem(dataItem, item.children, itemToPush);
                }
            });
        }
    }

    showRemoveDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = '500px';
        dialogConfig.height = '150px';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.panelClass = 'custom-dialog-container';
        const dialogRef = this.dialogService.open(MenusDeleteDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result: any) => {
            if (result && result.toLowerCase() === 'save') {
                this.removeItem(this.treeView.contextItem, this.treeView.partialData);
                this.treeView.contextItem = null;
                this.treeView.selectedKeys = [];
                this.toolbar.onSelectionChanged(false);
            }
        });
    }

    saveTenantFromDialog(isAdd, dataItem) {
        if (isAdd) {
            if (this.isSibling) {
                this.addItem(this.treeView.contextItem, this.treeView.data, dataItem);
            } else {
                if (this.treeView.contextItem) {
                    this.treeView.contextItem.children = this.treeView.contextItem.children || [];
                    const child = { ...dataItem };
                    this.treeView.contextItem.children.push(child);
                    this.treeView.contextItem = null;
                }
            }
        } else {
            Object.assign(this.treeView.contextItem, dataItem);
            this.treeView.contextItem = null;
        }
        this.treeView.selectedKeys = [];
        this.toolbar.onSelectionChanged(false);
    }

    actionHandler(eventResponse: any) {
        switch (eventResponse.action) {
            case ButtonAction.Add:
                this.treeView.addClicked(eventResponse.event);
                break;
            case ButtonAction.Edit:
                this.showAddEditDialog(this.treeView.contextItem);
                break;
            case ButtonAction.Remove:
                this.showRemoveDialog();
                break;
            case ButtonAction.Refresh:
                this.refresh();
                this.toolbar.onSelectionChanged(false);
                break;
            case ButtonAction.Search:
                this.onFilterKeyUp();
                this.toolbar.onSelectionChanged(false);
                break;
            case ButtonAction.SearchClear:
                this.onFilterKeyUp();
                break;
        }
    }

    onFilterKeyUp() {
        this.treeView.partialData = this.search(this.treeData, this.toolbar.filterValue);
        if (this.toolbar.filterValue && this.toolbar.filterValue.trim().length > 0) {
            const lookupService = (this.treeView.treeViewComponent as any).treeViewLookupService;
            if (!lookupService || !lookupService.map) {
                throw new Error('Could not access internal tree view lookup service.');
            }
            const map: Map<string, any> = lookupService.map;
            const mapValues = Array.from(map.keys()); // ts workaround
            this.treeView.expandedKeys = mapValues;
        } else {
            this.treeView.expandedKeys = ['0'];
        }
    }

    public search(children: any[], term: string): any[] {
        return children.reduce((acc, child) => {
            if (this.contains(child.MenuName, term)) {
                acc.push(child);
            } else if (child.children && child.children.length > 0) {
                const newChildren = this.search(child.children, term);
                if (newChildren.length > 0) {
                    const newObj = { ...child };
                    newObj.children = [];
                    newObj.children = newChildren;
                    acc.push(newObj);
                }
            }
            return acc;
        }, []);
    }

    onSelectionChange() {}

    private contains(textFields: string, term: string): boolean {
        return textFields.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    }
}
