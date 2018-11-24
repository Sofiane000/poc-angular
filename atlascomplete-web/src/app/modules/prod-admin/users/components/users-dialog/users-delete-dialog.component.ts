import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
    selector: 'app-users-delete-dialog',
    templateUrl: './users-delete-dialog.component.html',
    styles: [
        'input[type=text] { width: 100%; }'
    ]
})
export class UsersDeleteDialogComponent {
    constructor(private dialogRef: MatDialogRef<UsersDeleteDialogComponent>) {

    }

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }
}
