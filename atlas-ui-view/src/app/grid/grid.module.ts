import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridExampleComponent } from './components/grid-example.component';
import { GridRoutingModule } from './grid.routing.module';
import { AtlasGridModule, AtlasDialogService, AtlasDialogModule } from 'atlas-ui-angular';
import { UserService } from './services/user.service';
import { EditFormComponent } from './components/edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './components/detail.component';
import { MatTabsModule } from '@angular/material';
import { PeopleService } from './services/people.service';

@NgModule({
  declarations: [GridExampleComponent, EditFormComponent, DetailComponent],
  entryComponents: [EditFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GridRoutingModule,
    AtlasGridModule,
    AtlasDialogModule.forRoot(),
    MatTabsModule
  ],
  providers: [
    UserService,
    AtlasDialogService,
    PeopleService
  ]
})
export class GridModule { }
