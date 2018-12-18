import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtlasGridTestComponent } from './atlas-grid-test/atlas-grid-test.component';
import { AtlasTreeTestComponent } from './atlas-tree-test/atlas-tree-test.component';
import { AtlasDocViewerTestComponent } from './atlas-doc-viewer-test/atlas-doc-viewer-test.component';
import { AtlasInputTestComponent } from './atlas-input-test/atlas-input-test.component';
import { AtlasButtonTestComponent } from './atlas-button-test/atlas-button-test.component';
import { AtlasToolbarTestComponent } from './atlas-toolbar-test/atlas-toolbar-test.component';

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
        component: AtlasInputTestComponent
    },
    {
        path: 'atlasbutton',
        component: AtlasButtonTestComponent
    },
    {
        path: 'atlastoolbar',
        component: AtlasToolbarTestComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
