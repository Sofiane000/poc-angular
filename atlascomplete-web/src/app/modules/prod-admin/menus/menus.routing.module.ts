import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusTreeComponent } from './components/menus-tree/menus-tree.component';
import { MenusDialogComponent } from './components/menus-dialog/menus-dialog.component';
import { CanDeactivateGuard } from 'atlas-web-services';
const appRoutes: Routes = [
  {
    path: '', component: MenusTreeComponent, children: [
      { path: 'action/add', component: MenusDialogComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'action/edit/:id', component: MenusDialogComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class MenusRoutingModule { }
