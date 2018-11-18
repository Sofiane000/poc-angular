import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasPageFooterComponent } from './components/atlas-page-footer.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
@NgModule({
    declarations: [
        AtlasPageFooterComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule
    ],
    exports: [
        AtlasPageFooterComponent
    ],
})
export class AtlasPageFooterModule {
}
