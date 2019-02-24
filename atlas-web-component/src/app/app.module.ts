import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
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
import { AtlasSelectModule } from 'projects/atlas-web-components/src/lib/atlas-select/atlas-select.module';
import { AtlasSideNavContainerModule } from 'projects/atlas-web-components/src/lib/atlas-sidenav-container/atlas-sidenav-container.module';
import { TreeTestService } from 'projects/atlas-web-components/src/lib/atlas-tree/components/tree-test.service';
import {
    AtlasContentModule,
    AtlasDatePickerModule,
    AtlasDialogContentModule,
    AtlasDialogFooterModule,
    AtlasDialogHeaderModule,
    AtlasDialogModule,
    AtlasDocViewerModule,
    AtlasHeaderModule,
    AtlasMenuModule,
    AtlasSideBarModule,
    AtlasSplitterModule,
    AtlasUploadModule,
} from 'projects/atlas-web-components/src/public_api';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.module.routing';
import { AtlasButtonTestComponent } from './atlas-button-test/atlas-button-test.component';
import { AtlasCardTestComponent } from './atlas-card-test/atlas-card-test.component';
import { AtlasDatePickerTestComponent } from './atlas-date-picker-test/atlas-date-picker-test.component';
import { AtlasDialogFormTestComponent } from './atlas-dialog-form-test/atlas-dialog-form-test.component';
import { AtlasDocViewerTestComponent } from './atlas-doc-viewer-test/atlas-doc-viewer-test.component';
import { AtlasGridTestComponent } from './atlas-grid-test/atlas-grid-test.component';
import { AtlasInputTestComponent } from './atlas-input-test/atlas-input-test.component';
import { AtlasMultiSelectTestComponent } from './atlas-multiselect-test/atlas-multiselect-test.component';
import { AtlasSelectTestComponent } from './atlas-select-test/atlas-select-test.component';
import { AtlasSplitterTestComponent } from './atlas-splitter-test/atlas-splitter-test.component';
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
        AtlasDatePickerTestComponent,
        AtlasSplitterTestComponent,
        AtlasSelectTestComponent,
    ],
    entryComponents: [AtlasDialogFormTestComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        AtlasSelectModule,
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
        AtlasDatePickerModule,
        AtlasSplitterModule,
        AtlasUploadModule,
        HttpClientModule,
    ],
    providers: [TestService, TreeTestService],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry) {
        matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
