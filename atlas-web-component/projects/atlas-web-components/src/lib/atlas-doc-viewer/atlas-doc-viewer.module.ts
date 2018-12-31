import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtlasDocViewerComponent } from './components/atlas-doc-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [AtlasDocViewerComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    FormsModule,
  ],
  exports: [
    AtlasDocViewerComponent,
  ]
})
export class AtlasDocViewerModule { }
