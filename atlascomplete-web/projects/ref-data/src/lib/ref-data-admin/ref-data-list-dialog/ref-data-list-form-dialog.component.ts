import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';

@Component({
    selector: 'lib-ref-data-list-form-dialog',
    templateUrl: './ref-data-list-form-dialog.component.html',
    styleUrls: ['./ref-data-list-form-dialog.component.css'],
})
export class RefDataListFormDialogComponent implements OnInit {
    buttons: IAtlasFooterbtn[];

    editForm: FormGroup = new FormGroup({
        ListTypeName: new FormControl('', Validators.required),
        ListTypeDesc: new FormControl('', Validators.required),
        ListTypeSK: new FormControl(),
    });

    @Input() public isNew = false;
    hasChanges: boolean;

    @Input() public set model(obj) {
        this.editForm.reset(obj);
    }

    constructor(private dialogRef: MatDialogRef<RefDataListFormDialogComponent>) {
        this.editForm.valueChanges.subscribe((changes) => {
            this.hasChanges = true;
        });
    }

    ngOnInit() {
        this.buttons = [
            {
                text: 'Cancel',
                action: 'close',
                title: 'No',
            },
            {
                text: 'Save',
                action: 'save',
                title: 'Save',
                primary: true,
            },
        ];
    }

    closeHandler(action) {
        this.dialogRef.close(action);
    }
}
