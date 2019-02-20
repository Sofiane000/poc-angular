import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefDataAdminModule } from './ref-data-admin/ref-data-admin.module';

const appRoutes: Routes = [
    {
        path: 'administration',
        loadChildren: () => RefDataAdminModule,
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class RefDataRoutingModule {}
