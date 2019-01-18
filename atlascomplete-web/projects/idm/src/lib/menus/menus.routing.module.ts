import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@atlas/web-services';
import { MenusDialogComponent } from './menus-dialog/menus-dialog.component';
import { MenusTreeComponent } from './menus-tree/menus-tree.component';
const appRoutes: Routes = [
    {
        path: '',
        component: MenusTreeComponent,
        children: [
            {
                path: 'action/add',
                component: MenusDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
            {
                path: 'action/edit/:id',
                component: MenusDialogComponent,
                canDeactivate: [CanDeactivateGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class MenusRoutingModule {}
