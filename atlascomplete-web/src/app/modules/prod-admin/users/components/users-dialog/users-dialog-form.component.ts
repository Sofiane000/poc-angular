import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Input, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
    selector: 'app-users-dialog-form',
    templateUrl: './users-dialog-form.component.html',
    styles: [
        'input[type=text] { width: 100%; }'
    ]
})
export class UsersDialogFormComponent {
    editForm: FormGroup = new FormGroup({
        'UserMstrSK': new FormControl(),
        'PhNbr': new FormControl('', Validators.required),
        'cf_LoginID': new FormControl('', Validators.required),
        'EmailAddr': new FormControl('', Validators.required),
        'FirstName': new FormControl('', Validators.required),
        'MiddleName': new FormControl(''),
        'LastName': new FormControl('')
    });

    @Input() public isNew = false;
    hasChanges: boolean;

    @Input() public set model(obj) {
        this.editForm.reset(obj);
    }
    constructor(private dialogRef: MatDialogRef<UsersDialogFormComponent>) {
        this.editForm.valueChanges.subscribe(changes => {
            this.hasChanges = true;
        });
    }

    closeHandler(actions) {
        this.dialogRef.close();
    }
}
