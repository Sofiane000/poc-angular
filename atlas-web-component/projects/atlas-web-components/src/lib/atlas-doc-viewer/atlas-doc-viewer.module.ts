import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AtlasDocViewerComponent } from './components/atlas-doc-viewer.component';

@NgModule({
    declarations: [AtlasDocViewerComponent],
    imports: [CommonModule, PdfViewerModule, FormsModule],
    exports: [AtlasDocViewerComponent],
})
export class AtlasDocViewerModule {}
