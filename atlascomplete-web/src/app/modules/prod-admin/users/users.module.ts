import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import {
  AtlasGridModule, AtlasDialogModule, AtlasPageHeaderModule,
  AtlasPageContentModule, AtlasTabLayoutModule,
  AtlasDialogHeaderModule, AtlasDialogFooterModule, AtlasDialogContentModule,
   AtlasPageFooterModule, AtlasInputModule, AtlasToolbarModule
} from 'atlas-ui-angular';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { PeopleService } from './services/people.service';
import { UsersDialogFormComponent } from './components/users-dialog/users-dialog-form.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { UsersDetailTenantsComponent } from './components/users-detail-tenants/users-detail-tenants.component';
import { UsersDetailPropertiesComponent } from './components/users-detail-properties/users-detail-properties.component';
import { UsersDetailRolesComponent } from './components/users-detail-roles/users-detail-roles.component';
import { SharedModule } from '../../shared/shared.module';
import { DataAccessFactory } from 'atlas-web-services';
import { UsersDeleteDialogComponent } from './components/users-dialog/users-delete-dialog.component';
import { UsersDialogComponent } from './components/users-dialog/user-dialog.component';
@NgModule({
  declarations: [UsersDetailComponent, UsersDialogFormComponent, UsersGridComponent,
    UsersDetailTenantsComponent, UsersDetailPropertiesComponent,
    UsersDetailRolesComponent, UsersDeleteDialogComponent, UsersDialogComponent],
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
    AtlasToolbarModule
  ],
  providers: [
    UserService,
    PeopleService
  ]
})
export class UsersModule {
  constructor(private dataAccessFactory: DataAccessFactory) {
    // initialise applicable services for data-access
    this.dataAccessFactory.createService('idm.users').module('idm').url('users');
  }
}
