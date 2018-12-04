import { Component, OnInit, ViewChild } from '@angular/core';
import { AtlasTreeComponent, AtlasToolbarButton, ButtonAction, AtlasToolbarComponent } from 'atlas-ui-angular';
import { TenantsService } from '../../services/tenants.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TenantsDeleteDialogComponent } from '../tenants-delete-dialog/tenants-delete-dialog.component';
@Component({
  selector: 'app-tenants-tree',
  templateUrl: './tenants-tree.component.html',
  styleUrls: ['./tenants-tree.component.scss']
})
export class TenantsTreeComponent implements OnInit {
  treeData: any[] = [];
  menuItems: any[] = [
    { text: 'Add Sibling', icon: 'plus' },
    { text: 'Add Child', icon: 'plus' }
  ];
  @ViewChild(AtlasTreeComponent) treeView: AtlasTreeComponent;
  @ViewChild(AtlasToolbarComponent) toolbar: AtlasToolbarComponent;
  isFilterable: boolean;
  isEditable: boolean;
  children = 'children';
  treeItems: any[] = [];
  isSibling: boolean;
  buttons: AtlasToolbarButton[] = [
    {
      title: 'Add',
      action: ButtonAction.Add,
      icon: 'fa-plus',
    },
    {
      title: 'Edit',
      action: ButtonAction.Edit,
      icon: 'fa-pencil',
      isDisabled: true
    },
    {
      title: 'Remove',
      action: ButtonAction.Remove,
      icon: 'fa-trash',
      isDisabled: true

    },
    {
      title: 'Refresh',
      action: ButtonAction.Refresh,
      icon: 'fa-refresh',
      class: 'refresh-btn'
    }
  ];
  constructor(private dialogService: MatDialog,
    private tenantService: TenantsService,
    private router: Router) {
    this.tenantService.getSaveSubject().subscribe(response => {
      this.saveTenantFromDialog(response.isAdd, response.data);
    });
  }


  ngOnInit(): void {
    this.tenantService.getTenants().subscribe(treeData => {
      this.treeData = treeData;
    });

  }
  refresh() {
    this.tenantService.getTenants().subscribe(treeData => {
      this.treeView.partialData = treeData.map(item => item);
    });
  }
  editHandler(event) {
    this.showAddEditDialog(this.treeView.contextItem);
  }
  showAddEditDialog(dataItem: any) {
    const isNew = dataItem ? false : true;
    this.router.navigate(['administration/tenants/action/' + (isNew ? 'add' : 'edit/' + dataItem.TenantTaxnmySK)]);
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
      items.forEach(item => {
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
      items.forEach(item => {
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
    dialogConfig.height = '137px';
    dialogConfig.closeOnNavigation = true;
    dialogConfig.panelClass = 'custom-dialog-container';
    const dialogRef = this.dialogService.open(TenantsDeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.toLowerCase() === 'save') {
        this.removeItem(this.treeView.contextItem, this.treeView.partialData);
        this.treeView.contextItem = null;
        this.nodeClickHandler();
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
          const child = Object.assign({}, dataItem);
          this.treeView.contextItem.children.push(child);
          this.treeView.contextItem = null;
        }
      }
    } else {
      Object.assign(this.treeView.contextItem, dataItem);
      this.treeView.contextItem = null;
    }
    this.nodeClickHandler();
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
        break;
      case ButtonAction.Search:
        this.onFilterKeyUp();
        break;
      case ButtonAction.SearchClear:
        this.onFilterKeyUp();
        break;
    }
  }
  nodeClickHandler() {
    if (this.treeView.contextItem) {
      this.buttons[1].isDisabled = false;
      this.buttons[2].isDisabled = false;
    } else {
      this.buttons[1].isDisabled = true;
      this.buttons[2].isDisabled = true;
    }
  }
  onFilterKeyUp() {
    this.treeView.partialData = this.search(this.treeData, this.toolbar.filterValue);
    if (this.toolbar.filterValue && this.toolbar.filterValue.trim().length > 0) {
      const lookupService = (<any>this.treeView.treeViewComponent).treeViewLookupService;
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
      if (this.contains(child.TenantTaxnmyName, term)) {
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
  private contains(textFields: string, term: string): boolean {
    return textFields.toLowerCase().indexOf(term.toLowerCase()) >= 0;
  }

}
