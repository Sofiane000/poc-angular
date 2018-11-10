import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeExampleComponent } from './tree-example/tree-example.component';
import { TreeRoutingModule } from './tree.routing.module';
import { AtlasTreeModule, AtlasDialogModule } from 'atlas-ui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDialogTreeFormComponent } from './tree-example/edit-dialog-tree.component';

@NgModule({
  declarations: [
    TreeExampleComponent,
    EditDialogTreeFormComponent
  ],
  entryComponents: [EditDialogTreeFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    TreeRoutingModule,
    AtlasTreeModule,
    ReactiveFormsModule,
    AtlasDialogModule.forRoot()
  ]
})
export class TreeModule { }
