import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasPageHeaderComponent } from './components/atlas-page-header.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
@NgModule({
    declarations: [
        AtlasPageHeaderComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule
    ],
    exports: [
        AtlasPageHeaderComponent
    ],
})
export class AtlasPageHeaderModule {
}
