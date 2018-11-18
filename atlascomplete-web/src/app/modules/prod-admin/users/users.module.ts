import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { AtlasGridModule, AtlasDialogModule, AtlasPageHeaderModule,
  AtlasPageContentModule, AtlasTabLayoutModule, AtlasPageFooterModule
 } from 'atlas-ui-angular';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { PeopleService } from './services/people.service';
import { UsersDialogFormComponent } from './components/users-dialog/users-dialog.component';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { UsersDetailTenantsComponent } from './components/users-detail-tenants/users-detail-tenants.component';
import { UsersDetailPropertiesComponent } from './components/users-detail-properties/users-detail-properties.component';
import { UsersDetailRolesComponent } from './components/users-detail-roles/users-detail-roles.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UsersDetailComponent, UsersDialogFormComponent, UsersGridComponent,
    UsersDetailTenantsComponent, UsersDetailPropertiesComponent, UsersDetailRolesComponent],
  entryComponents: [UsersDialogFormComponent],
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
    MatTabsModule,
    AtlasDialogModule.forRoot()
  ],
  providers: [
    UserService,
    PeopleService
  ]
})
export class UsersModule { }
