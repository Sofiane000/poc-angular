import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-tenants-delete-dialog',
    templateUrl: './tenants-delete-dialog.component.html',
    styleUrls: ['./tenants-delete-dialog.component.scss'],
})
export class TenantsDeleteDialogComponent {
    constructor(private dialogRef: MatDialogRef<TenantsDeleteDialogComponent>) {}

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }
}
