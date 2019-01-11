import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    AtlasDialogContentModule,
    AtlasDialogFooterModule,
    AtlasDialogHeaderModule,
    AtlasDialogModule,
    AtlasInputModule,
    AtlasPageContentModule,
    AtlasPageFooterModule,
    AtlasPageHeaderModule,
    AtlasToolbarModule,
    AtlasTreeModule,
} from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { SharedModule } from '../../shared/shared.module';
import { TenantsDeleteDialogComponent } from './components/tenants-delete-dialog/tenants-delete-dialog.component';
import { TenantsDialogFormComponent } from './components/tenants-dialog-form/tenants-dialog-form.component';
import { TenantsDialogComponent } from './components/tenants-dialog/tenants-dialog.component';
import { TenantsTreeComponent } from './components/tenants-tree/tenants-tree.component';
import { TenantsService } from './services/tenants.service';
import { TenantsRoutingModule } from './tenants.routing.module';

@NgModule({
    declarations: [
        TenantsTreeComponent,
        TenantsDialogFormComponent,
        TenantsDeleteDialogComponent,
        TenantsDialogComponent,
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
        SharedModule.forRoot(),
    ],
    providers: [TenantsService],
})
export class TenantsModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('idm.tenants')
            .module('idm')
            .url('tenants');
    }
}
