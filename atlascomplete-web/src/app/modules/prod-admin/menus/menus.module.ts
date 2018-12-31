import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusRoutingModule } from './menus.routing.module';
import {
    AtlasTreeModule,
    AtlasDialogModule,
    AtlasPageHeaderModule,
    AtlasPageContentModule,
    AtlasPageFooterModule,
    AtlasDialogHeaderModule,
    AtlasDialogFooterModule,
    AtlasDialogContentModule,
    AtlasInputModule,
    AtlasToolbarModule,
} from 'atlas-web-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenusTreeComponent } from './components/menus-tree/menus-tree.component';
import { MenusDialogComponent } from './components/menus-dialog/menus-dialog.component';
import { MenusService } from './services/menus.service';
import { DataAccessFactory } from 'atlas-web-services';
import { MenusDeleteDialogComponent } from './components/menus-delete-dialog/menus-delete-dialog.component';
import { MenusDialogFormComponent } from './components/menus-dialog-form/menus-dialog-form.component';
import { SharedModule } from '../../shared/shared.module';

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
