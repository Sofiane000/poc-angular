import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';

@Component({
  selector: 'atlas-tree',
  templateUrl: './atlas-tree.component.html',
  styleUrls: ['./atlas-tree.component.css']
})
export class AtlasTreeComponent implements OnInit {
  @ViewChild('treemenu')
  public gridContextMenu: ContextMenuComponent;
  @Input() data: any[];

  @Input() items: any[];
  @Input() isTreeViewExpandable: boolean;
  @Input() isTreeViewHierarchyBinding: boolean;
  @Input() textFields;
  @Input() children;
  @Input() hasChildren;
  private contextItem: any;

  constructor() { }

  ngOnInit() {
  }

}
