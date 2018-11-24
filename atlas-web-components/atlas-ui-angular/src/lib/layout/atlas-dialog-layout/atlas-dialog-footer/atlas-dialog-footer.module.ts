import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';
import { AtlasDialogFooterComponent } from './components/atlas-dialog-footer.component';

@NgModule({
    declarations: [
        AtlasDialogFooterComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        AtlasDialogFooterComponent
    ],
})
export class AtlasDialogFooterModule {
}
