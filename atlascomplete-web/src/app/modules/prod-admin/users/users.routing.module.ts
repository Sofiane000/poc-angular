import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { UsersDetailTenantsComponent } from './components/users-detail-tenants/users-detail-tenants.component';
import { UsersDetailRolesComponent } from './components/users-detail-roles/users-detail-roles.component';
import { UsersDetailPropertiesComponent } from './components/users-detail-properties/users-detail-properties.component';
import { CanDeactivateGuard } from '../../shared/services/can-deactivate.guard';

const appRoutes: Routes = [
  { path: '', component: UsersGridComponent, canDeactivate: [CanDeactivateGuard] },
  {
    path: ':id/details', component: UsersDetailComponent, children: [
      { path: 'tenants', component: UsersDetailTenantsComponent },
      { path: 'roles', component: UsersDetailRolesComponent },
      { path: 'properties', component: UsersDetailPropertiesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
