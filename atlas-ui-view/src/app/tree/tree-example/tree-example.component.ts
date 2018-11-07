import { Component, OnInit } from '@angular/core';
import { TREE_DATA } from '../models/tree-data';
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
    this.treeData = TREE_DATA;
    this.treeItems = [{ TenantTaxnmyName: 'Remove', icon: 'close' }];
  }
}
