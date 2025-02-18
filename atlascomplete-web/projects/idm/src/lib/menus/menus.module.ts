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
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MenusDeleteDialogComponent } from './menus-delete-dialog/menus-delete-dialog.component';
import { MenusDialogFormComponent } from './menus-dialog-form/menus-dialog-form.component';
import { MenusDialogComponent } from './menus-dialog/menus-dialog.component';
import { MenusTreeComponent } from './menus-tree/menus-tree.component';
import { MenusRoutingModule } from './menus.routing.module';
import { MenusService } from './shared/menus.service';

@NgModule({
    declarations: [
        MenusTreeComponent,
        MenusDialogFormComponent,
        MenusDeleteDialogComponent,
        MenusDialogComponent,
    ],
    entryComponents: [MenusDialogFormComponent, MenusDeleteDialogComponent],
    imports: [
        CommonModule,
        FormsModule,
        MenusRoutingModule,
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
    providers: [MenusService],
})
export class MenusModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('idm.menus')
            .module('idm')
            .url('menus');
    }
}
