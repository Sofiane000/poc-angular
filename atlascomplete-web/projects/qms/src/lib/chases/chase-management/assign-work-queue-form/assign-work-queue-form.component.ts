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
    assignees: any[] = [
        { key: 'Assignee 1', value: 'Assignee 1' },
        { key: 'Assignee 2', value: 'Assignee 2' },
    ];
    buttons: IAtlasFooterbtn[] = [
        {
            text: 'Cancel',
            action: 'close',
            title: 'Cancel',
        },
        {
            text: 'Assign',
            action: 'assign',
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
