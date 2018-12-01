import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginGuardService } from './services/login-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { DataAccessFactory } from 'atlas-web-services';

@NgModule({
    declarations: [
        LoginComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule
    ],
    providers: [
        AuthGuardService,
        LoginGuardService,
        AuthenticationService
    ]
})
export class AuthModule {
  constructor(private dataAccessFactory: DataAccessFactory) {
    // initialise applicable services for data-access
    this.dataAccessFactory.createService('idm.user.components').module('idm').url('user/components');
  }
}
