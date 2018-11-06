import { Component, OnInit } from '@angular/core';
import { TREE_DATA } from '../models/tree-data';
import { itemAt } from '@progress/kendo-angular-grid/dist/es2015/data/data.iterators';

@Component({
  selector: 'app-tree-example',
  templateUrl: './tree-example.component.html',
  styleUrls: ['./tree-example.component.css']
})
export class TreeExampleComponent implements OnInit {
  treeData: any[];
  treeItems: any[];
  constructor() { }


  ngOnInit(): void {
    const data: any[] = [];
    this.treeData = TREE_DATA;
    // this.treeData = [
    //   {
    //     text: 'Furniture', items: [
    //       { text: 'Tables & Chairs' },
    //       { text: 'Sofas' },
    //       { text: 'Occasional Furniture' }
    //     ]
    //   },
    //   {
    //     text: 'Decor', items: [
    //       { text: 'Bed Linen' },
    //       { text: 'Curtains & Blinds' },
    //       { text: 'Carpets' }
    //     ]
    //   }
    // ];

    this.treeItems = [{ TenantTaxnmyName: 'Remove', icon: 'close' }];
  }

}
