import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@atlas/web-services';
import { TenantsDialogComponent } from './tenants-dialog/tenants-dialog.component';
import { TenantsTreeComponent } from './tenants-tree/tenants-tree.component';
const appRoutes: Routes = [
    {
        path: '',
        component: TenantsTreeComponent,
        children: [
            {
                path: 'action/add',
                component: TenantsDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: 'action/edit/:id',
                component: TenantsDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class TenantsRoutingModule {}
