import { NgModule } from '@angular/core';
import { DocumentViewerComponent } from './components/doc-viewer.component';
import { CommonModule } from '@angular/common';
import { DocViewerRoutingModule } from './doc-viewer.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [DocumentViewerComponent],
    imports: [
        CommonModule,
        DocViewerRoutingModule,
        SharedModule
    ],
    providers: [
    ]
})
export class DocViewerModule { }