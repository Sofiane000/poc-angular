import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtlasButtonModule, AtlasInputModule } from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    declarations: [LoginComponent, HomeComponent],
    imports: [CommonModule, SharedModule, FormsModule, AtlasInputModule, AtlasButtonModule],
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
