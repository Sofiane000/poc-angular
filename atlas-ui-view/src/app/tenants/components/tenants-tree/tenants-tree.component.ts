import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AtlasDialogService, AtlasTreeComponent } from 'atlas-ui-angular';
import { TREE_DATA } from '../../models/tree-data';
import { TenantsDialogFormComponent } from '../tenants-dialog/tenants-dialog.component';
const saveAction = { text: 'Save', primary: true };
const cancelAction = { text: 'Cancel' };
@Component({
  selector: 'app-tenants-tree',
  templateUrl: './tenants-tree.component.html',
  styleUrls: ['./tenants-tree.component.css']
})
export class TenantsTreeComponent implements OnInit {
  treeData: any[] = [];
  menuItems: any[] = [
    { text: 'Add Sibling', icon: 'plus' },
    { text: 'Add Child', icon: 'plus' }
  ];
  @ViewChild(AtlasTreeComponent) treeView: AtlasTreeComponent;
  @ViewChild('dialogContainer', { read: ViewContainerRef })
  public containerRef: ViewContainerRef;
  isFilterable: boolean;
  isEditable: boolean;
  children = 'children';
  contextMenuItems: any[] = [
    { text: 'Add Sibling', icon: 'plus' },
    { text: 'Add Child', icon: 'plus' }
  ];
  treeItems: any[] = [];
  constructor(private dialogService: AtlasDialogService) { }


  ngOnInit(): void {
    this.treeData = TREE_DATA.map(item => item);
  }
  refresh() {
    this.treeView.data = TREE_DATA.map(item => item);
  }
  editHandler(event) {
    this.showAddEditDialog(this.treeView.contextItem);
  }
  showAddEditDialog(dataItem: any, isSibling?: boolean) {
    const isNew = dataItem ? false : true;
    const dialogRef = this.dialogService.open({
      appendTo: this.containerRef,
      title: !dataItem ? 'Add Tenant' : 'Edit Tenant',
      content: TenantsDialogFormComponent,
      actions: [
        cancelAction,
        saveAction
      ],
      width: 450,
      height: 450
    });
    const editForm = dialogRef.content.instance;
    editForm.model = isNew ? {} : dataItem;
    dialogRef.result.subscribe((dialogResult: any) => {
      if (dialogResult.text && dialogResult.text.toLowerCase() === 'save') {
        const item = editForm.editForm.value;
        if (isNew) {
          if (isSibling) {
            this.addItem(this.treeView.contextItem, this.treeView.data, item);
          } else {
            if (this.treeView.contextItem) {
              this.treeView.contextItem.children = this.treeView.contextItem.children || [];
              const child = Object.assign({}, item);
              this.treeView.contextItem.children.push(child);
              this.treeView.contextItem = null;
            }
          }
        } else {
          Object.assign(this.treeView.contextItem, item);
          this.treeView.contextItem = null;
        }
      }
    });
  }
  addHandler(event) {
    if (event.text === 'Add Sibling') {
      if (this.treeView.contextItem) {
        this.showAddEditDialog(null, true);
      }
    } else {
      this.showAddEditDialog(null, false);
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
    const dialog = this.dialogService.open({
      appendTo: this.containerRef,
      title: 'Please confirm',
      content: 'Are you sure?',
      actions: [
        { text: 'No' },
        { text: 'Yes', primary: true }
      ],
      width: 450,
      height: 200,
      minWidth: 250
    });

    dialog.result.subscribe((result: any) => {
      if (result.text && result.text.toLowerCase() === 'yes') {
        this.removeItem(this.treeView.contextItem, this.treeView.data);
        this.treeView.contextItem = null;
      }
    });
  }
}
