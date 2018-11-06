import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeExampleComponent } from './tree-example/tree-example.component';

const appRoutes: Routes = [
  { path: '', component: TreeExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class TreeRoutingModule { }
