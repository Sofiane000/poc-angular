import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconRegistry,
    MatRadioModule,
    MatSidenavModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AtlasCardModule } from 'projects/atlas-web-components/src/lib/atlas-card/atlas-card.module';
import { AtlasDropdownModule } from 'projects/atlas-web-components/src/lib/atlas-dropdown/atlas-dropdown.module';
import { TestService } from 'projects/atlas-web-components/src/lib/atlas-grid/services/test-grid.service';
import { AtlasSideNavContainerModule } from 'projects/atlas-web-components/src/lib/atlas-sidenav-container/atlas-sidenav-container.module';
import { TreeTestService } from 'projects/atlas-web-components/src/lib/atlas-tree/components/tree-test.service';
import {
    AtlasContentModule,
    AtlasDialogContentModule,
    AtlasDialogFooterModule,
    AtlasDialogHeaderModule,
    AtlasDialogModule,
    AtlasDocViewerModule,
    AtlasHeaderModule,
    AtlasMenuModule,
    AtlasSideBarModule,
} from 'projects/atlas-web-components/src/public_api';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.module.routing';
import { AtlasButtonTestComponent } from './atlas-button-test/atlas-button-test.component';
import { AtlasCardTestComponent } from './atlas-card-test/atlas-card-test.component';
import { AtlasDialogFormTestComponent } from './atlas-dialog-form-test/atlas-dialog-form-test.component';
import { AtlasDocViewerTestComponent } from './atlas-doc-viewer-test/atlas-doc-viewer-test.component';
import { AtlasGridTestComponent } from './atlas-grid-test/atlas-grid-test.component';
import { AtlasInputTestComponent } from './atlas-input-test/atlas-input-test.component';
import { AtlasMultiSelectTestComponent } from './atlas-multiselect-test/atlas-multiselect-test.component';
import { AtlasToolbarTestComponent } from './atlas-toolbar-test/atlas-toolbar-test.component';
import { AtlasTreeTestComponent } from './atlas-tree-test/atlas-tree-test.component';
import { ElementModule } from './element.module';

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
        AtlasMultiSelectTestComponent,
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
        AtlasDropdownModule,
    ],
    providers: [TestService, TreeTestService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
