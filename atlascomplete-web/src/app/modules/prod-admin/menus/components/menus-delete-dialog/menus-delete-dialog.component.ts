import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-menus-delete-dialog',
    templateUrl: './menus-delete-dialog.component.html',
    styleUrls: ['./menus-delete-dialog.component.scss'],
})
export class MenusDeleteDialogComponent {
    constructor(private dialogRef: MatDialogRef<MenusDeleteDialogComponent>) {}

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }
}
