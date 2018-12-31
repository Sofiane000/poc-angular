import { Component, OnInit } from '@angular/core';
import { TreeTestService } from 'projects/atlas-web-components/src/lib/atlas-tree/components/tree-test.service';

@Component({
    selector: 'atlas-tree-test',
    templateUrl: './atlas-tree-test.component.html',
    styleUrls: ['./atlas-tree-test.component.scss'],
})
export class AtlasTreeTestComponent implements OnInit {
    treeTestServiceChild: TreeTestService;
    menuItems: any[] = [{ text: 'Add Sibling', icon: 'plus' }, { text: 'Add Child', icon: 'plus' }];
    isExpanded = true;
    
  constructor(private treeService: TreeTestService) {
        this.treeTestServiceChild = treeService;
    }

    ngOnInit() {}
    
  onSelectionChange() {}
}
