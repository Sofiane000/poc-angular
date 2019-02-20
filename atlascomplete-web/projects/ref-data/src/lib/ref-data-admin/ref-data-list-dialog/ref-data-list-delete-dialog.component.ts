import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';

@Component({
    selector: 'lib-ref-data-list-delete-dialog',
    templateUrl: './ref-data-list-delete-dialog.component.html',
    styleUrls: ['./ref-data-list-delete-dialog.component.css'],
})
export class RefDataListDeleteDialogComponent {
    private buttons: IAtlasFooterbtn[];

    constructor(private dialogRef: MatDialogRef<RefDataListDeleteDialogComponent>) {
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
