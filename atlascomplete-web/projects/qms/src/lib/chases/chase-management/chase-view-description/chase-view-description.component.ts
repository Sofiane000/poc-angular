import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'lib-chase-view-description',
    templateUrl: './chase-view-description.component.html',
})
export class ChaseViewDescriptionComponent {
    note: string;
    
  constructor(private dialogRef: MatDialogRef<ChaseViewDescriptionComponent>) {}
    buttons: any[] = [
        {
            text: 'Ok',
            action: 'save',
            title: 'Ok',
            primary: true,
            isDisabled: false,
        },
    ];

    closeHandler(event) {
        this.dialogRef.close(event);
    }
}
