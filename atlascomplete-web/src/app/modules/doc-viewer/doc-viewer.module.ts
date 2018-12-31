import { NgModule } from '@angular/core';
import { DocumentViewerComponent } from './components/doc-viewer.component';
import { CommonModule } from '@angular/common';
import { DocViewerRoutingModule } from './doc-viewer.routing.module';
import { SharedModule } from '../shared/shared.module';
import { AtlasDocViewerModule } from 'atlas-web-components';
import { DocumentViewerService } from './services/doc-viewer.service';

@NgModule({
    declarations: [DocumentViewerComponent],
    imports: [
        CommonModule,
        DocViewerRoutingModule,
        SharedModule,
        AtlasDocViewerModule,
    ],
    providers: [DocumentViewerService],
})
export class DocViewerModule {}
