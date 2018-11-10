import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TREE_DATA } from '../models/tree-data';
import { AtlasDialogService, AtlasTreeComponent } from 'atlas-ui-angular';
import { EditDialogTreeFormComponent } from './edit-dialog-tree.component';
declare var $: any;
const saveAction = { text: 'Save', primary: true };
const cancelAction = { text: 'Cancel' };
@Component({
  selector: 'app-tree-example',
  templateUrl: './tree-example.component.html',
  styleUrls: ['./tree-example.component.css']
})
export class TreeExampleComponent implements OnInit {
  treeData: any[] = [];
  menuItems: any[] = [
    { text: 'Add Sibling', icon: 'plus' },
    { text: 'Add Child', icon: 'plus' }
  ];
  @ViewChild(AtlasTreeComponent) treeView: AtlasTreeComponent;
  @ViewChild('dialogContainer', { read: ViewContainerRef })
  public containerRef: ViewContainerRef;

  dataSourceOptions: any;
  treeViewOptions: any;
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
    TREE_DATA.forEach(item => {
      this.filterItems(item);
    });
    this.dataSourceOptions = {
      transport: {
        create: (options) => {
          // this.treeItems.push();
          options.success([{
            TenantTaxnmySK: 1001,
            ParentTenantTaxnmySK: 6,
            TenantTaxnmyName: 'Testing',
            TenantTaxnmyType: 'Testing',
            EfctvStartDt: '1900-01-01',
            EfctvEndDt: '1900-01-01',
            RootDomain: '5',
            daTableRowId: 'asdasdasd',
          }]);
        },
        read: options => {
          options.success(this.treeItems);
        },
        update: options => {
          options.success(this.treeItems);
        },
        destroy: options => {
          options.success(this.treeItems);
        }
      },
      batch: true,
      schema: {
        model: {
          id: 'TenantTaxnmySK',
          parentId: 'ParentTenantTaxnmySK',
          fields: {
            TenantTaxnmySK: { type: 'number', editable: false, nullable: false },
            ParentTenantTaxnmySK: { nullable: true, type: 'number' },
            TenantTaxnmyName: { type: 'string' },
            TenantTaxnmyType: { type: 'string' },
            EfctvStartDt: { type: 'date' },
            EfctvEndDt: { type: 'date' },
            RootDomain: { type: 'string' },
            daTableRowId: { type: 'string' },
          }
        }
      }
    };
    this.treeViewOptions = {
      dataSource: this.dataSourceOptions,
      editable: 'popup',
      height: 540,
      columns: [
        { field: 'TenantTaxnmyName', title: 'Tenants' },
        { field: 'TenantTaxnmyType', title: 'Tenant Type', hidden: true },
        { field: 'EfctvStartDt', title: 'Effective Start Date', hidden: true },
        { field: 'EfctvEndDt', title: 'Effective End Date', hidden: true },
        {
          title: 'Details',
          command: [
            {
              name: ' ',
              text: '',
              imageClass: 'k-i-info',
              click: this.showDetails
            }
          ],
          width: 160
        }
      ],
      selectable: true,
      change: ($event: kendo.ui.TreeListChangeEvent) => {
        console.log('Something has changed! ', $event);
      }
    };
  }
  private filterItems(dataItem: any): void {
    Object.keys(dataItem).map(item => {
      if (dataItem[item] instanceof Array) {
        dataItem[item].forEach(insideItem => {
          this.filterItems(insideItem);
        });
        this.treeItems.push({
          TenantTaxnmySK: dataItem.TenantTaxnmySK,
          ParentTenantTaxnmySK: dataItem.ParentTenantTaxnmySK,
          TenantTaxnmyName: dataItem.TenantTaxnmyName,
          TenantTaxnmyType: dataItem.TenantTaxnmyType,
          EfctvStartDt: dataItem.EfctvStartDt,
          EfctvEndDt: dataItem.EfctvEndDt,
          RootDomain: dataItem.RootDomain,
          daTableRowId: dataItem.daTableRowId,
          expanded: dataItem.expanded
        });
      }
    });
  }
  showDetails(event) {
    event.preventDefault();
    // var dataItem = this.treeView.dataItem($(event.currentTarget).closest('tr'));
    // console.log(dataItem);
  }
  refresh() {
    this.treeView.data = TREE_DATA.map(item => item);
  }
  editHandler(event) {
    this.showAddEditDialog(this.treeView.contextItem);
  }
  showAddEditDialog(dataItem: any) {
    const isNew = dataItem ? false : true;
    const dialogRef = this.dialogService.open({
      appendTo: this.containerRef,
      title: !dataItem ? 'Add Tenant' : 'Edit Tenant',
      content: EditDialogTreeFormComponent,
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
          this.addItem(this.treeView.contextItem, this.treeView.data, item);
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
        this.showAddEditDialog(null);
      }
    } else {
      // call service method to save.
      if (this.treeView.contextItem) {
        this.treeView.contextItem.children = this.treeView.contextItem.children || [];
        const item = Object.assign({}, this.treeView.contextItem);
        item.children = null;
        this.treeView.contextItem.children.push(item);
        this.treeView.contextItem.expanded = true;
        this.treeView.contextItem = null;
      }
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
