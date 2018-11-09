import { Component, OnInit, ViewChild } from '@angular/core';
import { TREE_DATA } from '../models/tree-data';
declare var $: any;
@Component({
  selector: 'app-tree-example',
  templateUrl: './tree-example.component.html',
  styleUrls: ['./tree-example.component.css']
})
export class TreeExampleComponent implements OnInit {
  dataSourceOptions: any;
  treeViewOptions: any;
  isFilterable: boolean;
  isEditable: boolean;
  contextMenuItems: any[] = [
    { text: 'Add Sibling', icon: 'plus' },
    { text: 'Add Child', icon: 'plus' }
  ];
  treeItems: any[] = [];
  constructor() { }


  ngOnInit(): void {
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
}
