import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmsRoutingModule } from './dms.routing.module';
import {
    AtlasGridModule,
    AtlasDialogModule,
    AtlasPageHeaderModule,
    AtlasPageContentModule,
    AtlasTabLayoutModule,
    AtlasDialogHeaderModule,
    AtlasDialogFooterModule,
    AtlasDialogContentModule,
    AtlasPageFooterModule,
    AtlasInputModule,
    AtlasToolbarModule,
} from 'atlas-web-components';
import { DmsService } from './services/dms.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { DmsGridComponent } from './components/dms-grid/dms-grid.component';
import { DmsDetailComponent } from './components/dms-detail/dms-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { DataAccessFactory } from 'atlas-web-services';
import { DmsStorageComponent } from './components/dms-storage/dms-storage.component';
import { DmsPermissionsComponent } from './components/dms-permissions/dms-permissions.component';
import { DmsSchemaComponent } from './components/dms-schema/dms-schema.component';
@NgModule({
    declarations: [DmsDetailComponent, DmsGridComponent,
        DmsStorageComponent,
        DmsPermissionsComponent,
        DmsSchemaComponent],

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
