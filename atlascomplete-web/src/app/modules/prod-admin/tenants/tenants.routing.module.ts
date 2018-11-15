import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantsTreeComponent } from './components/tenants-tree/tenants-tree.component';

const appRoutes: Routes = [
  { path: '', component: TenantsTreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class TenantsRoutingModule { }
