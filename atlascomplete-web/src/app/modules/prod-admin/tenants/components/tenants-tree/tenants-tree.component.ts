import { Component, OnInit, ViewChild } from '@angular/core';
import { AtlasTreeComponent } from 'atlas-ui-angular';
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
  isFilterable: boolean;
  isEditable: boolean;
  children = 'children';
  treeItems: any[] = [];
  isSibling: boolean;
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
    this.tenantService.getTenants().subscribe(treeData => this.treeView.data = treeData);
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
        this.removeItem(this.treeView.contextItem, this.treeView.data);
        this.treeView.contextItem = null;
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
  }
}
