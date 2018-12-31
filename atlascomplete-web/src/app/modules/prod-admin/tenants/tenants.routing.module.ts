import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantsTreeComponent } from './components/tenants-tree/tenants-tree.component';
import { TenantsDialogComponent } from './components/tenants-dialog/tenants-dialog.component';
import { CanDeactivateGuard } from 'atlas-web-services';
const appRoutes: Routes = [
  {
    path: '', component: TenantsTreeComponent, children: [
      { path: 'action/add', component: TenantsDialogComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'action/edit/:id', component: TenantsDialogComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class TenantsRoutingModule { }
