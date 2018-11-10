import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BakAtlasTreeComponent } from './components/bak-atlas-tree.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { MenuModule, ContextMenuModule } from '@progress/kendo-angular-menu';
import '@progress/kendo-ui';
import 'jquery';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';
import { AtlasTreeComponent } from './components/atlas-tree.component';
@NgModule({
  declarations: [
    BakAtlasTreeComponent,
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
    AtlasTreeComponent,
    BakAtlasTreeComponent,
  ]
})
export class AtlasTreeModule { }
