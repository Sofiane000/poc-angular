import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, LoginGuardService } from '@atlas/web-services';
import { BpmModule } from 'projects/bpm/bpm.module';
import { DmsModule } from 'projects/dms/dms.module';
import { IdmModule } from 'projects/idm/idm.module';
import { HomeComponent } from './modules/auth/components/home/home.component';
import { LoginComponent } from './modules/auth/components/login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        canActivate: [AuthGuardService],
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuardService],
    },
    {
        path: 'idm',
        loadChildren: () => IdmModule,
        canActivate: [AuthGuardService],
    },
    {
        path: 'bpm',
        loadChildren: () => BpmModule,
        canActivate: [AuthGuardService],
        outlet: 'sidebar',
    },
    {
        path: 'dms',
        loadChildren: () => DmsModule,
        canActivate: [AuthGuardService],
    },
    // {
    //     path: 'administration/dms',
    //     loadChildren: './modules/prod-admin/dms/dms.module#DmsModule',
    //     canActivate: [AuthGuardService],
    // },
    // {
    //     path: 'administration/tenants',
    //     loadChildren: './modules/prod-admin/tenants/tenants.module#TenantsModule',
    //     canActivate: [AuthGuardService],
    // },
    // {
    //     path: 'administration/menus',
    //     loadChildren: './modules/prod-admin/menus/menus.module#MenusModule',
    //     canActivate: [AuthGuardService],
    // },
    // {
    //     path: 'tasks',
    //     loadChildren: './modules/tasks/tasks.module#TasksModule',
    //     outlet: 'sidebar',
    //     canActivate: [AuthGuardService],
    // },
    {
        path: 'document',
        loadChildren: './modules/doc-viewer/doc-viewer.module#DocViewerModule',
        outlet: 'sidebar',
        canActivate: [AuthGuardService],
    },
    {
        path: 'document/:documentId',
        loadChildren: './modules/doc-viewer/doc-viewer.module#DocViewerModule',
        outlet: 'sidebar',
        canActivate: [AuthGuardService],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
