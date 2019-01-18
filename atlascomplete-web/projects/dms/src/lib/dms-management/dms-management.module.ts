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
} from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DmsDetailComponent } from './dms-detail/dms-detail.component';
import { DmsGridComponent } from './dms-grid/dms-grid.component';
import { DmsManagementRoutingModule } from './dms-management.routing.module';
import { DmsPermissionsComponent } from './dms-permissions/dms-permissions.component';
import { DmsSchemaComponent } from './dms-schema/dms-schema.component';
import { DmsStorageComponent } from './dms-storage/dms-storage.component';
import { DmsService } from './shared/dms.service';
@NgModule({
    declarations: [
        DmsDetailComponent,
        DmsGridComponent,
        DmsStorageComponent,
        DmsPermissionsComponent,
        DmsSchemaComponent,
    ],

    imports: [
        CommonModule,
        SharedModule.forRoot(),
        ReactiveFormsModule,
        DmsManagementRoutingModule,
        AtlasGridModule,
        AtlasPageHeaderModule,
        AtlasDialogHeaderModule,
        AtlasDialogFooterModule,
        AtlasDialogContentModule,
        MatTabsModule,
        AtlasDialogModule.forRoot(),
        AtlasPageContentModule,
        AtlasTabLayoutModule,
        AtlasPageFooterModule,
        MatTabsModule,
        AtlasInputModule,
        AtlasToolbarModule,
    ],
    providers: [DmsService],
})
export class DmsManagementModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('dms.categories')
            .module('dms')
            .url('categories');
    }
}
