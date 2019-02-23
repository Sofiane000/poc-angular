import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '@atlas/web-services';
import { ChaseManagementDialogComponent } from './chase-management-dialog/chase-management-dialog.component';
import { ChaseManagementComponent } from './chase-management/chase-management.component';

const routes: Routes = [{
  path: '',
  component: ChaseManagementComponent,
  children: [{
    path: 'action/update',
    component: ChaseManagementDialogComponent,
    canDeactivate: [CanDeactivateGuard]
  }, {
      path: 'action/assign',
      component: ChaseManagementDialogComponent,
      canDeactivate: [CanDeactivateGuard]
    },
    {
      path: 'search/member',
      component: ChaseManagementDialogComponent,
      canDeactivate: [CanDeactivateGuard]
    }, {
      path: 'search/provider',
      component: ChaseManagementDialogComponent,
      canDeactivate: [CanDeactivateGuard]
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaseManagementRoutingModule { }
