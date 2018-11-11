import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'administration/users', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: 'administration/users', loadChildren: '../grid/grid.module#GridModule', canActivate: [AuthGuardService] },
  { path: 'administration/components', loadChildren: '../button/button.module#ButtonModule', canActivate: [AuthGuardService] },
  { path: 'administration/tenants', loadChildren: '../tree/tree.module#TreeModule', canActivate: [AuthGuardService] },
  { path: 'tasks', loadChildren: '../tasks/tasks.module#TasksModule', outlet: 'sidebar', canActivate: [AuthGuardService] },
  { path: 'document', loadChildren: '../doc-viewer/doc-viewer.module#DocViewerModule', outlet: 'sidebar', canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
