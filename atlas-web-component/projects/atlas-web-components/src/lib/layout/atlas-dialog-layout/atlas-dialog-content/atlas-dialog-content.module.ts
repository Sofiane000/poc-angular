import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { AtlasDialogContentComponent } from './components/atlas-dialog-content.component';
@NgModule({
    declarations: [AtlasDialogContentComponent],
    entryComponents: [AtlasDialogContentComponent],
    imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule],
    exports: [AtlasDialogContentComponent],
})
export class AtlasDialogContentModule {}
