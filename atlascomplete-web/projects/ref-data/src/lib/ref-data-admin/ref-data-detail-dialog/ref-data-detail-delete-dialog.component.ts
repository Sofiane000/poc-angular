import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';

@Component({
    selector: 'lib-ref-data-detail-delete-dialog',
    templateUrl: './ref-data-detail-delete-dialog.component.html',
    styleUrls: ['./ref-data-detail-delete-dialog.component.css'],
})
export class RefDataDetailDeleteDialogComponent {
    private buttons: IAtlasFooterbtn[];

    constructor(private dialogRef: MatDialogRef<RefDataDetailDeleteDialogComponent>) {
        this.setButtons();
    }

    setButtons() {
        this.buttons = [
            {
                text: 'No',
                action: 'close',
                title: 'No',
            },
            {
                text: 'Yes',
                action: 'save',
                title: 'Yes',
                primary: true,
            },
        ];
    }

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }
}
