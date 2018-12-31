import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtlasGridTestComponent } from './atlas-grid-test/atlas-grid-test.component';
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
    AtlasDocViewerModule,
    AtlasDialogHeaderModule,
    AtlasDialogFooterModule,
    AtlasDialogContentModule,
} from 'projects/atlas-web-components/src/public_api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.module.routing';
import { AtlasTreeTestComponent } from './atlas-tree-test/atlas-tree-test.component';
import { TreeTestService } from 'projects/atlas-web-components/src/lib/atlas-tree/components/tree-test.service';
import { AtlasDocViewerTestComponent } from './atlas-doc-viewer-test/atlas-doc-viewer-test.component';
import { AtlasInputTestComponent } from './atlas-input-test/atlas-input-test.component';
import { AtlasButtonTestComponent } from './atlas-button-test/atlas-button-test.component';
import { AtlasToolbarTestComponent } from './atlas-toolbar-test/atlas-toolbar-test.component';
import { AtlasDialogFormTestComponent } from './atlas-dialog-form-test/atlas-dialog-form-test.component';
import { ElementModule } from './element.module';
import { AtlasCardModule } from 'projects/atlas-web-components/src/lib/atlas-card/atlas-card.module';
import { AtlasCardTestComponent } from './atlas-card-test/atlas-card-test.component';
import { AtlasSideNavContainerModule } from 'projects/atlas-web-components/src/lib/atlas-sidenav-container/atlas-sidenav-container.module';

@NgModule({
    declarations: [
        AppComponent,
        AtlasGridTestComponent,
        AtlasTreeTestComponent,
        AtlasDocViewerTestComponent,
        AtlasInputTestComponent,
        AtlasButtonTestComponent,
        AtlasToolbarTestComponent,
        AtlasDialogFormTestComponent,
        AtlasCardTestComponent,
    ],
    entryComponents: [AtlasDialogFormTestComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        ElementModule,
        AtlasSideNavContainerModule,
        AtlasHeaderModule,
        AtlasContentModule,
        AtlasDialogHeaderModule,
        AtlasDialogContentModule,
        AtlasDialogFooterModule,
        MatButtonModule,
        AtlasMenuModule,
        AtlasCardModule,
        MatSidenavModule,
        AtlasSideBarModule,
        AtlasDocViewerModule,
        MatDialogModule,
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
