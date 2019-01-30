import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtlasPageContentComponent } from './components/atlas-page-content.component';
@NgModule({
    declarations: [AtlasPageContentComponent],
    entryComponents: [AtlasPageContentComponent],
    imports: [CommonModule],
    exports: [AtlasPageContentComponent],
})
export class AtlasPageContentModule {}
