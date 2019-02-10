import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UploadModule } from '@progress/kendo-angular-upload';
import { AtlasDialogContentModule } from '../layout/atlas-dialog-layout/atlas-dialog-content/atlas-dialog-content.module';
import { AtlasDialogFooterModule } from '../layout/atlas-dialog-layout/atlas-dialog-footer/atlas-dialog-footer.module';
import { AtlasDialogHeaderModule } from '../layout/atlas-dialog-layout/atlas-dialog-header/atlas-dialog-header.module';
import { AtlasUploadDialogComponent } from './components/atlas-upload-dialog.component';
import { AtlasUploadComponent } from './components/atlas-upload.component';
@NgModule({
    declarations: [AtlasUploadComponent, AtlasUploadDialogComponent],
    entryComponents: [AtlasUploadDialogComponent, AtlasUploadComponent],
    imports: [
        CommonModule,
        UploadModule,
        FormsModule,
        AtlasDialogHeaderModule,
        AtlasDialogContentModule,
        AtlasDialogFooterModule,
    ],
    exports: [AtlasUploadComponent, AtlasUploadDialogComponent],
})
export class AtlasUploadModule {}
