import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersGridComponent } from './components/user-grid/users-grid.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';

const appRoutes: Routes = [
  { path: '', component: UsersGridComponent },
  { path: ':id/details', component: UsersDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
