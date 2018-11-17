import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { AtlasPageFooterComponent } from './components/atlas-page-footer.component';
@NgModule({
    declarations: [
        AtlasPageFooterComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule
    ],
    exports: [
        AtlasPageFooterComponent
    ],
})
export class AtlasPageFooterModule {
}
