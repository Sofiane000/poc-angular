import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { AtlasDialogHeaderComponent } from './components/atlas-dialog-header.component';

@NgModule({
    declarations: [
        AtlasDialogHeaderComponent,
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule
    ],
    exports: [
        AtlasDialogHeaderComponent,
    ],
})
export class AtlasDialogHeaderModule {
}
