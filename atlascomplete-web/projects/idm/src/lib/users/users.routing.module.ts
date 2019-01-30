import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@atlas/web-services';
import { UsersDetailPropertiesComponent } from './users-detail-properties/users-detail-properties.component';
import { UsersDetailRolesComponent } from './users-detail-roles/users-detail-roles.component';
import { UsersDetailTenantsComponent } from './users-detail-tenants/users-detail-tenants.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersDialogComponent } from './users-dialog/user-dialog.component';
import { UsersGridComponent } from './users-grid/users-grid.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UsersGridComponent,
        children: [
            {
                path: 'action/add',
                component: UsersDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: 'action/edit/:id',
                component: UsersDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
        ],
    },
    {
        path: ':id',
        component: UsersDetailComponent,
        children: [
            { path: 'tenants', component: UsersDetailTenantsComponent },
            { path: 'roles', component: UsersDetailRolesComponent },
            { path: 'properties', component: UsersDetailPropertiesComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
