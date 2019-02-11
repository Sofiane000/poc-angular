import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { AtlasDialogBoxService } from './services/atlas-dialogbox.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, MatDialogModule],
    exports: [MatDialogModule],
    providers: [AtlasDialogBoxService],
})
export class AtlasDialogBoxModule {}
