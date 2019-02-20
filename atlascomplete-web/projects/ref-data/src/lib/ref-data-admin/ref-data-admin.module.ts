import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import {
    AtlasDatePickerModule,
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
    AtlasSplitterModule,
    AtlasTabLayoutModule,
    AtlasToolbarModule,
    AtlasTreeModule,
    AtlasUploadModule,
    AtlasUploadService,
} from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TenantsService } from '../../../../idm/src/lib/tenants/shared/tenants.service';
import { RefDataAdminRoutingModule } from './ref-data-admin-routing.module';
import { RefDataDetailDeleteDialogComponent } from './ref-data-detail-dialog/ref-data-detail-delete-dialog.component';
import { RefDataDetailDialogComponent } from './ref-data-detail-dialog/ref-data-detail-dialog.component';
import { RefDataDetailFormDialogComponent } from './ref-data-detail-dialog/ref-data-detail-form-dialog.component';
import { RefDataDetailComponent } from './ref-data-detail/ref-data-detail.component';
import { RefDataListDeleteDialogComponent } from './ref-data-list-dialog/ref-data-list-delete-dialog.component';
import { RefDataListDialogComponent } from './ref-data-list-dialog/ref-data-list-dialog.component';
import { RefDataListFormDialogComponent } from './ref-data-list-dialog/ref-data-list-form-dialog.component';
import { RefDataListComponent } from './ref-data-list/ref-data-list.component';
import { RefDataDetailService } from './shared/ref-data-detail.service';
import { RefDataListService } from './shared/ref-data-list.service';

@NgModule({
    declarations: [
        RefDataListFormDialogComponent,
        RefDataListComponent,
        RefDataListDialogComponent,
        RefDataListDeleteDialogComponent,
        RefDataDetailComponent,
        RefDataDetailDialogComponent,
        RefDataDetailFormDialogComponent,
        RefDataDetailDeleteDialogComponent,
    ],
    entryComponents: [
        RefDataListFormDialogComponent,
        RefDataListDeleteDialogComponent,
        RefDataDetailFormDialogComponent,
        RefDataDetailDeleteDialogComponent,
    ],
    imports: [
        CommonModule,
        SharedModule.forRoot(),
        ReactiveFormsModule,
        RefDataAdminRoutingModule,
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
        AtlasSplitterModule,
        AtlasTreeModule,
        AtlasDatePickerModule,
        AtlasUploadModule,
        AtlasDialogBoxModule,
    ],
    providers: [TenantsService, RefDataListService, RefDataDetailService, AtlasUploadService],
})
export class RefDataAdminModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('ref-data.lists')
            .module('ref-data')
            .url('lists');
        this.dataAccessFactory
            .createService('ref-data.details')
            .module('ref-data')
            .url('details');
        this.dataAccessFactory
            .createService('idm.tenants')
            .module('idm')
            .url('tenants');
    }
}
