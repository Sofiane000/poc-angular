import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@atlas/web-services';
import { RefDataDetailDialogComponent } from './ref-data-detail-dialog/ref-data-detail-dialog.component';
import { RefDataDetailComponent } from './ref-data-detail/ref-data-detail.component';
import { RefDataListDialogComponent } from './ref-data-list-dialog/ref-data-list-dialog.component';
import { RefDataListComponent } from './ref-data-list/ref-data-list.component';

const appRoutes: Routes = [
    {
        path: '',
        component: RefDataListComponent,
        children: [
            {
                path: 'action/add',
                component: RefDataListDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: 'action/edit/:id',
                component: RefDataListDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
        ],
    },
    {
        path: 'tenant/:id/detail/:id2',
        component: RefDataDetailComponent,
        children: [
            {
                path: 'action/:id3',
                component: RefDataDetailDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: 'action/edit/:id3',
                component: RefDataDetailDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class RefDataAdminRoutingModule {}
