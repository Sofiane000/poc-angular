import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentViewerComponent } from './components/doc-viewer.component';

const appRoutes: Routes = [
    { path: '', component: DocumentViewerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class DocViewerRoutingModule { }
