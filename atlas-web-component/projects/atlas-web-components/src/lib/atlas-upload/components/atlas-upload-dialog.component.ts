import { Component, Input, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '../../layout/atlas-dialog-layout/atlas-dialog-footer/models/atlas-footer-btn';
import { IUploadConfig } from '../models/upload-config';
import { AtlasUploadComponent } from './atlas-upload.component';
@Component({
    selector: 'atlas-upload-dialog',
    templateUrl: './atlas-upload-dialog.component.html',
})
export class AtlasUploadDialogComponent {
    @Input()
    title: string;
    @Input()
    uploadConfig: IUploadConfig;
    @ViewChild(AtlasUploadComponent)
    public atlasUpload: AtlasUploadComponent;
    buttons: IAtlasFooterbtn[];

    constructor(private dialogRef: MatDialogRef<AtlasUploadDialogComponent>) {}

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        this.buttons = [
            {
                text: 'Cancel',
                action: 'close',
                title: 'Cancel',
            },
            {
                text: 'Save',
                action: 'save',
                title: 'Save',
                primary: true,
            },
        ];
    }

    closeHandler(actions) {
        if (actions === 'save') {
            if (this.atlasUpload.upload.fileList.files.length > 0) {
                console.log(this.atlasUpload.upload.fileList.files);
                this.dialogRef.close({
                    action: 'save',
                    files: this.atlasUpload.upload.fileList.files,
                });
            }
        } else {
            this.dialogRef.close({
                action: 'close',
                files: null,
            });
        }
    }
}
