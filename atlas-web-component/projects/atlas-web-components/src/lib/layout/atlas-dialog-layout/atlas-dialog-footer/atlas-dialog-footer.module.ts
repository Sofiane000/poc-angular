import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { AtlasDialogFooterComponent } from './components/atlas-dialog-footer.component';
import { ButtonModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [
        AtlasDialogFooterComponent
    ],
    imports: [
        CommonModule,
        ButtonModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        AtlasDialogFooterComponent
    ],
})
export class AtlasDialogFooterModule {
}
