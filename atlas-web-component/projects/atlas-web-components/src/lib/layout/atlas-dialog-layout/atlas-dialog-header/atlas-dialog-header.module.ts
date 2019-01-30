import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
} from '@angular/material';
import { AtlasDialogHeaderComponent } from './components/atlas-dialog-header.component';

@NgModule({
    declarations: [AtlasDialogHeaderComponent],
    entryComponents: [AtlasDialogHeaderComponent],
    imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule, MatToolbarModule],
    exports: [AtlasDialogHeaderComponent],
})
export class AtlasDialogHeaderModule {}
