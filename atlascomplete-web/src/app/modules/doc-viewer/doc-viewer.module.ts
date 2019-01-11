import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtlasDocViewerModule } from '@atlas/web-components';
import { SharedModule } from '../shared/shared.module';
import { DocumentViewerComponent } from './components/doc-viewer.component';
import { DocViewerRoutingModule } from './doc-viewer.routing.module';
import { DocumentViewerService } from './services/doc-viewer.service';

@NgModule({
    declarations: [DocumentViewerComponent],
    imports: [CommonModule, DocViewerRoutingModule, SharedModule, AtlasDocViewerModule],
    providers: [DocumentViewerService],
})
export class DocViewerModule {}
