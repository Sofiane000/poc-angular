import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaseManagementModule } from './chase-management/chase-management.module';

const routes: Routes = [{
  path: 'management',
  loadChildren: () => ChaseManagementModule
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChasesRoutingModule { }
