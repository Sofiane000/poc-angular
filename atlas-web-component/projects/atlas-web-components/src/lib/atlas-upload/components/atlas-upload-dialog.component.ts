import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IUploadConfig } from '../models/upload-config';
@Component({
    selector: 'atlas-upload-dialog',
    templateUrl: './atlas-upload-dialog.component.html',
})
export class AtlasUploadDialogComponent {
    @Input()
    title: string;
    @Input()
    uploadConfig: IUploadConfig;

    constructor(private dialogRef: MatDialogRef<AtlasUploadDialogComponent>) {}

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }
}
