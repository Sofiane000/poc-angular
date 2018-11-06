import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeExampleComponent } from './tree-example/tree-example.component';
import { TreeRoutingModule } from './tree.routing.module';
import { AtlasTreeModule } from 'atlas-ui-angular';

@NgModule({
  declarations: [TreeExampleComponent],
  imports: [
    CommonModule,
    TreeRoutingModule,
    AtlasTreeModule
  ]
})
export class TreeModule { }
