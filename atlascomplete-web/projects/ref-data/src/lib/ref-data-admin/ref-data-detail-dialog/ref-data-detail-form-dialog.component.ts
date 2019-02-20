import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';

@Component({
    selector: 'lib-ref-data-detail-form-dialog',
    templateUrl: './ref-data-detail-form-dialog.component.html',
    styleUrls: ['./ref-data-detail-form-dialog.component.css'],
})
export class RefDataDetailFormDialogComponent implements OnInit {
    buttons: IAtlasFooterbtn[];

    editForm: FormGroup = new FormGroup({
        ListDtlCode: new FormControl('', Validators.required),
        ListDtlDesc: new FormControl('', Validators.required),
        ListDtlSK: new FormControl(),
        ListTypeSK: new FormControl(),
        EfctvStartDt: new FormControl(new Date()),
        EfctvEndDt: new FormControl(new Date()),
        cf_ListItemIncluded: new FormControl(),
    });

    @Input() public isNew = false;
    hasChanges: boolean;

    @Input() public set model(obj) {
        this.editForm.reset(obj);
    }

    constructor(private dialogRef: MatDialogRef<RefDataDetailFormDialogComponent>) {
        this.editForm.valueChanges.subscribe((changes) => {
            this.hasChanges = true;
        });
    }

    ngOnInit() {
        this.buttons = [
            {
                text: 'Cancel',
                action: 'close',
                title: 'Cancel',
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
