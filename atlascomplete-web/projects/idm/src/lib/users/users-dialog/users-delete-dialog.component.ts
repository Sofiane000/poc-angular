import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';
@Component({
    selector: 'app-users-delete-dialog',
    templateUrl: './users-delete-dialog.component.html',
    styles: ['input[type=text] { width: 100%; }'],
})
export class UsersDeleteDialogComponent implements OnInit {
    buttons: IAtlasFooterbtn[];

    constructor(private dialogRef: MatDialogRef<UsersDeleteDialogComponent>) {}

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

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }
}
