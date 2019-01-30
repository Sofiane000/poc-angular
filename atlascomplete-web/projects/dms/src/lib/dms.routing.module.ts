import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmsManagementModule } from './dms-management/dms-management.module';

const appRoutes: Routes = [
    {
        path: 'management',
        loadChildren: () => DmsManagementModule,
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class DmsRoutingModule {}
