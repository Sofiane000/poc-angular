import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { DataAccessFactory } from 'atlas-web-services';
import { AtlasInputModule } from 'atlas-ui-angular';

@NgModule({
    declarations: [LoginComponent, HomeComponent],
    imports: [CommonModule, SharedModule, FormsModule, AtlasInputModule],
    providers: [AuthenticationService],
})
export class AuthModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('idm.user.components')
            .module('idm')
            .url('user/components');
    }
}
