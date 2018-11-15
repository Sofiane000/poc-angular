import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MenuModule, ContextMenuModule } from '@progress/kendo-angular-menu';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { AtlasTreeComponent } from './components/atlas-tree.component';
@NgModule({
  declarations: [
    AtlasTreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TreeViewModule,
    MenuModule,
    ContextMenuModule,
    ButtonModule
  ],
  exports: [
    AtlasTreeComponent
  ]
})
export class AtlasTreeModule { }