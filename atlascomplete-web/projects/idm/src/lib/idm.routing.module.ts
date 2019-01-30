import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompManagementModule } from './compmgmnt/compmgmnt.module';
import { MenusModule } from './menus/menus.module';
import { TenantsModule } from './tenants/tenants.module';
import { UsersModule } from './users/users.module';
const appRoutes: Routes = [
    {
        path: 'users',
        loadChildren: () => UsersModule,
    },
    {
        path: 'menus',
        loadChildren: () => MenusModule,
    },
    {
        path: 'components',
        loadChildren: () => CompManagementModule,
    },
    {
        path: 'tenants',
        loadChildren: () => TenantsModule,
    },
];
// @dynamic
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class IdmRoutingModule {}
