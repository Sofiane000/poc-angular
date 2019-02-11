import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';

@Component({
    selector: 'app-tenants-dialog-form',
    templateUrl: './tenants-dialog-form.component.html',
    styleUrls: ['./tenants-dialog-form.component.scss'],
})
export class TenantsDialogFormComponent implements OnInit {
    buttons: IAtlasFooterbtn[];

    form: FormGroup = new FormGroup({
        TenantTaxnmyName: new FormControl('', Validators.required),
        EfctvStartDt: new FormControl(new Date(), Validators.required),
        EfctvEndDt: new FormControl(new Date(), Validators.required),
        RootDomain: new FormControl('', Validators.required),
    });

    @Input() public set model(obj) {
        this.form.reset(obj);
    }
    @Input() isNew;

    constructor(private dialogRef: MatDialogRef<TenantsDialogFormComponent>) {}

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

    closeHandler(event: any) {
        this.dialogRef.close(event);
    }
}
