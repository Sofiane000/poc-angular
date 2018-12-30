import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import {
    AtlasDialogContentModule,
    AtlasDialogFooterModule,
    AtlasDialogHeaderModule,
    AtlasDialogModule,
    AtlasGridModule,
    AtlasInputModule,
    AtlasPageContentModule,
    AtlasPageFooterModule,
    AtlasPageHeaderModule,
    AtlasTabLayoutModule,
    AtlasToolbarModule,
} from 'atlas-web-components';
import { DataAccessFactory } from 'atlas-web-services';
import { SharedModule } from '../../shared/shared.module';
import { UsersDetailPropertiesComponent } from './components/users-detail-properties/users-detail-properties.component';
import { UsersDetailRolesComponent } from './components/users-detail-roles/users-detail-roles.component';
import { UsersDetailTenantsComponent } from './components/users-detail-tenants/users-detail-tenants.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { UsersDialogComponent } from './components/users-dialog/user-dialog.component';
import { UsersDeleteDialogComponent } from './components/users-dialog/users-delete-dialog.component';
import { UsersDialogFormComponent } from './components/users-dialog/users-dialog-form.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { PeopleService } from './services/people.service';
import { UserService } from './services/user.service';
import { UsersRoutingModule } from './users.routing.module';
@NgModule({
    declarations: [
        UsersDetailComponent,
        UsersDialogFormComponent,
        UsersGridComponent,
        UsersDetailTenantsComponent,
        UsersDetailPropertiesComponent,
        UsersDetailRolesComponent,
        UsersDeleteDialogComponent,
        UsersDialogComponent,
    ],
    entryComponents: [UsersDialogFormComponent, UsersDeleteDialogComponent],
    imports: [
        CommonModule,
        SharedModule.forRoot(),
        ReactiveFormsModule,
        UsersRoutingModule,
        AtlasGridModule,
        AtlasPageHeaderModule,
        AtlasPageContentModule,
        AtlasTabLayoutModule,
        AtlasPageFooterModule,
        AtlasDialogHeaderModule,
        AtlasDialogFooterModule,
        AtlasDialogContentModule,
        MatTabsModule,
        AtlasDialogModule.forRoot(),
        AtlasInputModule,
        AtlasToolbarModule,
    ],
    providers: [UserService, PeopleService],
})
export class UsersModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('idm.users')
            .module('idm')
            .url('users');
    }
}
