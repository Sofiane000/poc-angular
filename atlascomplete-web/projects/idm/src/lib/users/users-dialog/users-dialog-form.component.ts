import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';
@Component({
    selector: 'app-users-dialog-form',
    templateUrl: './users-dialog-form.component.html',
    styleUrls: ['./users-dialog-form.component.scss'],
})
export class UsersDialogFormComponent implements OnInit {
    buttons: IAtlasFooterbtn[];

    editForm: FormGroup = new FormGroup({
        UserMstrSK: new FormControl(),
        PhNbr: new FormControl('', Validators.required),
        cf_LoginID: new FormControl('', Validators.required),
        EmailAddr: new FormControl('', Validators.required),
        FirstName: new FormControl('', Validators.required),
        MiddleName: new FormControl(''),
        LastName: new FormControl(''),
        RecStat: new FormControl([]),
        LoginSK: new FormControl(''),
        UserTypeCode: new FormControl(''),
        cf_UserType: new FormControl(''),
        cf_TenantTaxnmyName: new FormControl(''),
        cf_UserStatTypeDesc: new FormControl(''),
        UserActvtnInd: new FormControl(),
        UserStatTypeCode: new FormControl(),
    });
    statuses: string[] = ['Active', 'Internal'];
    @Input() public isNew = false;
    hasChanges: boolean;

    @Input() public set model(obj) {
        this.editForm.reset(obj);
    }

    constructor(private dialogRef: MatDialogRef<UsersDialogFormComponent>) {
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

    closeHandler(actions) {
        this.dialogRef.close(actions);
    }

    valueChangeHandler(event) {}
}
