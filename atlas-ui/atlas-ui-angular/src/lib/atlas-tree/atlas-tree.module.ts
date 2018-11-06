import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasTreeComponent } from './components/atlas-tree.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MenuModule, ContextMenuModule } from '@progress/kendo-angular-menu';

@NgModule({
  declarations: [AtlasTreeComponent],
  imports: [
    CommonModule,
    TreeViewModule,
    MenuModule,
    ContextMenuModule,
  ],
  exports: [
    AtlasTreeComponent
  ]
})
export class AtlasTreeModule { }
