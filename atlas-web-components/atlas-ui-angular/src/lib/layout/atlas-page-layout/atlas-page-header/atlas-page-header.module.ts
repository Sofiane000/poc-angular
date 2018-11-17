import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { AtlasPageHeaderComponent } from './components/atlas-page-header.component';
@NgModule({
    declarations: [
        AtlasPageHeaderComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule
    ],
    exports: [
        AtlasPageHeaderComponent
    ],
})
export class AtlasPageHeaderModule {
}
