import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing.module';
import { AtlasGridModule, AtlasDialogModule } from 'atlas-ui-angular';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { PeopleService } from './services/people.service';
import { UsersDialogFormComponent } from './components/users-dialog/users-dialog.component';
import { UsersGridComponent } from './components/user-grid/users-grid.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';

@NgModule({
  declarations: [UsersDetailComponent, UsersDialogFormComponent, UsersGridComponent],
  entryComponents: [UsersDialogFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    AtlasGridModule,
    MatTabsModule,
    AtlasDialogModule.forRoot()
  ],
  providers: [
    UserService,
    PeopleService
  ]
})
export class UsersModule { }
