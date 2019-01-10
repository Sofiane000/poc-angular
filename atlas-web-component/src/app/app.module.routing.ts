import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtlasButtonTestComponent } from './atlas-button-test/atlas-button-test.component';
import { AtlasCardTestComponent } from './atlas-card-test/atlas-card-test.component';
import { AtlasDocViewerTestComponent } from './atlas-doc-viewer-test/atlas-doc-viewer-test.component';
import { AtlasGridTestComponent } from './atlas-grid-test/atlas-grid-test.component';
import { AtlasInputTestComponent } from './atlas-input-test/atlas-input-test.component';
import { AtlasMultiSelectTestComponent } from './atlas-multiselect-test/atlas-multiselect-test.component';
import { AtlasToolbarTestComponent } from './atlas-toolbar-test/atlas-toolbar-test.component';
import { AtlasTreeTestComponent } from './atlas-tree-test/atlas-tree-test.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'atlasgrid',
        pathMatch: 'full',
    },
    {
        path: 'atlasgrid',
        component: AtlasGridTestComponent,
    },
    {
        path: 'atlastree',
        component: AtlasTreeTestComponent,
    },
    {
        path: 'atlasinput',
        component: AtlasInputTestComponent,
    },
    {
        path: 'atlasbutton',
        component: AtlasButtonTestComponent,
    },
    {
        path: 'atlastoolbar',
        component: AtlasToolbarTestComponent,
    },
    {
        path: 'atlascard',
        component: AtlasCardTestComponent,
    },
    {
        path: 'atlasmultiselect',
        component: AtlasMultiSelectTestComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
