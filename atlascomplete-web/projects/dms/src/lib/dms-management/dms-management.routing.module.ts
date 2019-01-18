import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmsDetailComponent } from './dms-detail/dms-detail.component';
import { DmsGridComponent } from './dms-grid/dms-grid.component';
import { DmsPermissionsComponent } from './dms-permissions/dms-permissions.component';
import { DmsSchemaComponent } from './dms-schema/dms-schema.component';
import { DmsStorageComponent } from './dms-storage/dms-storage.component';
const appRoutes: Routes = [
    {
        path: '',
        component: DmsGridComponent,
        children: [],
    },
    {
        path: ':id',
        component: DmsDetailComponent,
        children: [
            { path: 'schema', component: DmsSchemaComponent },
            { path: 'storage', component: DmsStorageComponent },
            { path: 'permissions', component: DmsPermissionsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class DmsManagementRoutingModule {}
