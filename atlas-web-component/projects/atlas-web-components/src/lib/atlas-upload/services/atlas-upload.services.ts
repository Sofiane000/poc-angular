import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { FileRestrictions } from '@progress/kendo-angular-upload';
import { AtlasUploadDialogComponent } from '../components/atlas-upload-dialog.component';
import { IUploadConfig } from '../models/upload-config';

@Injectable()
export class AtlasUploadService {
    private dialogRef: MatDialogRef<AtlasUploadDialogComponent>;

    constructor(private dialogService: MatDialog) {}

    show(
        label: string,
        dialogConfig: MatDialogConfig,
        uploadConfig: IUploadConfig,
        layout: any,
        button: any
    ) {
        this.dialogRef = this.dialogService.open(AtlasUploadDialogComponent, dialogConfig);
        this.dialogRef.componentInstance.title = label;
        this.dialogRef.componentInstance.uploadConfig = uploadConfig;
        return this.dialogRef.afterClosed();
    }

    close() {
        this.dialogRef.close();
    }
}
