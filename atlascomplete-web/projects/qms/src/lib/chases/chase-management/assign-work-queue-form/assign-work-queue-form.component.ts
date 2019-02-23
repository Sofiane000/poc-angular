import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';
import { ChaseManagementDialogComponent } from '../chase-management-dialog/chase-management-dialog.component';

@Component({
    selector: 'lib-assign-work-queue-form',
    templateUrl: './assign-work-queue-form.component.html',
    styleUrls: ['./assign-work-queue-form.component.scss'],
})
export class AssignWorkQueueFormComponent implements OnInit {
    assignForm: FormGroup = new FormGroup({
        Assignee: new FormControl([], Validators.required),
    });
    assignees: string[] = ['Paquette, John', 'Tabasan, Kevin'];
    buttons: IAtlasFooterbtn[] = [
        {
            text: 'Cancel',
            action: 'close',
            title: 'Cancel',
        },
        {
            text: 'Assign',
            action: 'save',
            title: 'Assign',
            primary: true,
            isDisabled: true,
        },
    ];

    constructor(private dialogRef: MatDialogRef<ChaseManagementDialogComponent>) {
        this.assignForm.valueChanges.subscribe((changes) => {
            this.buttons[1].isDisabled = this.assignForm.valid ? false : true;
        });
    }

    ngOnInit() {}

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }
}
