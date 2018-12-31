import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasPageHeaderComponent } from './components/atlas-page-header.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { MatButtonModule, MatIconModule } from '@angular/material';
@NgModule({
    declarations: [
        AtlasPageHeaderComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        AtlasPageHeaderComponent
    ],
})
export class AtlasPageHeaderModule {
}
