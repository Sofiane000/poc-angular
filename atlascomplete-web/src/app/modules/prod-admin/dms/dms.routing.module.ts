import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from 'atlas-web-services';
import { DmsDetailComponent } from './components/dms-detail/dms-detail.component';
import { DmsGridComponent } from './components/dms-grid/dms-grid.component';
import { DmsPermissionsComponent } from './components/dms-permissions/dms-permissions.component';
import { DmsSchemaComponent } from './components/dms-schema/dms-schema.component';
import { DmsStorageComponent } from './components/dms-storage/dms-storage.component';

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
export class DmsRoutingModule {}
