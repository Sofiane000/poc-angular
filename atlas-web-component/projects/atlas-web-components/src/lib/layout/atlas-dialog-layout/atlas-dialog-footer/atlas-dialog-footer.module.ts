import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { AtlasDialogFooterComponent } from './components/atlas-dialog-footer.component';

@NgModule({
    declarations: [AtlasDialogFooterComponent],
    imports: [CommonModule, ButtonModule, MatDialogModule, MatButtonModule],
    exports: [AtlasDialogFooterComponent],
})
export class AtlasDialogFooterModule {}
