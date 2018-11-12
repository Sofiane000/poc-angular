import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: 'administration/users', loadChildren: '../users/users.module#UsersModule', canActivate: [AuthGuardService] },
  { path: 'administration/components', loadChildren: '../components/components.module#ComponentsModule', canActivate: [AuthGuardService] },
  { path: 'administration/tenants', loadChildren: '../tenants/tenants.module#TenantsModule', canActivate: [AuthGuardService] },
  { path: 'tasks', loadChildren: '../tasks/tasks.module#TasksModule', outlet: 'sidebar', canActivate: [AuthGuardService] },
  { path: 'document', loadChildren: '../doc-viewer/doc-viewer.module#DocViewerModule', outlet: 'sidebar', canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
