import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AtlasGridTestComponent } from './atlas-grid-test/atlas-grid-test.component';
import { AtlasGridModule } from 'projects/atlas-web-components/src/lib/atlas-grid/atlas-grid.module';
import {
    MatRadioModule,
    MatSidenavModule,
    MatIconRegistry,
    MatButtonModule,
    MatDialogModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestService } from 'projects/atlas-web-components/src/lib/atlas-grid/services/test-grid.service';
import {
    AtlasDialogModule,
    AtlasHeaderModule,
    AtlasContentModule,
    AtlasMenuModule,
    AtlasSideBarModule,
    AtlasTreeModule,
    AtlasDocViewerModule,
    AtlasInputModule,
    AtlasButtonModule,
    AtlasToolbarModule,
    AtlasDialogHeaderModule,
    AtlasDialogFooterModule,
    AtlasDialogContentModule,
} from 'projects/atlas-web-components/src/public_api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.module.routing';
import { environment } from 'src/environments/environment';
import { AtlasTreeTestComponent } from './atlas-tree-test/atlas-tree-test.component';
import { TreeTestService } from 'projects/atlas-web-components/src/lib/atlas-tree/components/tree-test.service';
import { AtlasDocViewerTestComponent } from './atlas-doc-viewer-test/atlas-doc-viewer-test.component';
import { AtlasInputTestComponent } from './atlas-input-test/atlas-input-test.component';
import { AtlasButtonTestComponent } from './atlas-button-test/atlas-button-test.component';
import { AtlasToolbarTestComponent } from './atlas-toolbar-test/atlas-toolbar-test.component';
import { AtlasDialogFormTestComponent } from './atlas-dialog-form-test/atlas-dialog-form-test.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent,
        AtlasGridTestComponent,
        AtlasTreeTestComponent,
        AtlasDocViewerTestComponent,
        AtlasInputTestComponent,
        AtlasButtonTestComponent,
        AtlasToolbarTestComponent,
        AtlasDialogFormTestComponent,
    ],
    entryComponents: [AtlasDialogFormTestComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        AtlasHeaderModule,
        AtlasButtonModule,
        AtlasContentModule,
        AtlasDialogHeaderModule,
        AtlasDialogContentModule,
        AtlasDialogFooterModule,
        MatButtonModule,
        AtlasMenuModule,
        MatSidenavModule,
        AtlasSideBarModule,
        AtlasGridModule,
        AtlasDocViewerModule,
        AtlasTreeModule,
        AtlasToolbarModule,
        MatDialogModule,
        AtlasInputModule,
        AtlasDialogModule.forRoot(),
        MatRadioModule,
    ],
    providers: [TestService, TreeTestService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
