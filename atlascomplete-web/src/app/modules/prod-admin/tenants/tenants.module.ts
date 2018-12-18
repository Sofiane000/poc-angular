import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantsRoutingModule } from './tenants.routing.module';
import {
  AtlasTreeModule,
  AtlasDialogModule, AtlasPageHeaderModule,
  AtlasPageContentModule, AtlasPageFooterModule,
  AtlasDialogHeaderModule, AtlasDialogFooterModule,
  AtlasDialogContentModule, AtlasInputModule, AtlasToolbarModule
} from 'atlas-web-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenantsTreeComponent } from './components/tenants-tree/tenants-tree.component';
import { TenantsDialogComponent } from './components/tenants-dialog/tenants-dialog.component';
import { TenantsService } from './services/tenants.service';
import { DataAccessFactory } from 'atlas-web-services';
import { TenantsDeleteDialogComponent } from './components/tenants-delete-dialog/tenants-delete-dialog.component';
import { TenantsDialogFormComponent } from './components/tenants-dialog-form/tenants-dialog-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    TenantsTreeComponent,
    TenantsDialogFormComponent,
    TenantsDeleteDialogComponent,
    TenantsDialogComponent
  ],
  entryComponents: [TenantsDialogFormComponent, TenantsDeleteDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    TenantsRoutingModule,
    AtlasInputModule,
    AtlasTreeModule,
    ReactiveFormsModule,
    AtlasDialogModule.forRoot(),
    AtlasPageHeaderModule,
    AtlasPageContentModule,
    AtlasPageFooterModule,
    AtlasDialogHeaderModule,
    AtlasDialogFooterModule,
    AtlasDialogContentModule,
    AtlasToolbarModule,
    SharedModule.forRoot()
  ],
  providers: [
    TenantsService
  ]
})
export class TenantsModule {
  constructor(private dataAccessFactory: DataAccessFactory) {
    // initialise applicable services for data-access
    this.dataAccessFactory.createService('idm.tenants').module('idm').url('tenants');
  }
}
