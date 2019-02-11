import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';

@Component({
    selector: 'app-tenants-delete-dialog',
    templateUrl: './tenants-delete-dialog.component.html',
})
export class TenantsDeleteDialogComponent implements OnInit {
    buttons: IAtlasFooterbtn[];

    constructor(private dialogRef: MatDialogRef<TenantsDeleteDialogComponent>) {}

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }

    ngOnInit() {
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
}
