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
import { SharedModule } from '../../shared/shared.module';
import { DmsDetailComponent } from './components/dms-detail/dms-detail.component';
import { DmsGridComponent } from './components/dms-grid/dms-grid.component';
import { DmsPermissionsComponent } from './components/dms-permissions/dms-permissions.component';
import { DmsSchemaComponent } from './components/dms-schema/dms-schema.component';
import { DmsStorageComponent } from './components/dms-storage/dms-storage.component';
import { DmsRoutingModule } from './dms.routing.module';
import { DmsService } from './services/dms.service';
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
        DmsRoutingModule,
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
export class DmsModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('dms.categories')
            .module('dms')
            .url('categories');
    }
}
