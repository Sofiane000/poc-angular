import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import {
    AtlasDialogBoxModule,
    AtlasDialogContentModule,
    AtlasDialogFooterModule,
    AtlasDialogHeaderModule,
    AtlasDialogModule,
    AtlasDropdownModule,
    AtlasGridModule,
    AtlasInputModule,
    AtlasPageContentModule,
    AtlasPageFooterModule,
    AtlasPageHeaderModule,
    AtlasTabLayoutModule,
    AtlasToolbarModule,
    AtlasUploadModule,
} from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { UserService } from './shared/user.service';
import { UsersDetailPropertiesComponent } from './users-detail-properties/users-detail-properties.component';
import { UsersDetailRolesComponent } from './users-detail-roles/users-detail-roles.component';
import { UsersDetailTenantsComponent } from './users-detail-tenants/users-detail-tenants.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersDialogComponent } from './users-dialog/user-dialog.component';
import { UsersDeleteDialogComponent } from './users-dialog/users-delete-dialog.component';
import { UsersDialogFormComponent } from './users-dialog/users-dialog-form.component';
import { UsersGridComponent } from './users-grid/users-grid.component';
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
        AtlasDropdownModule,
        AtlasUploadModule,
        AtlasDialogBoxModule,
    ],
    providers: [UserService],
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
