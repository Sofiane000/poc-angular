import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-tenants-dialog-form',
    templateUrl: './tenants-dialog-form.component.html',
    styleUrls: ['./tenants-dialog-form.component.scss'],
})
export class TenantsDialogFormComponent {
    form: FormGroup = new FormGroup({
        TenantTaxnmyName: new FormControl('', Validators.required),
        EfctvStartDt: new FormControl(
            new Date().toISOString().substring(0, 10),
            Validators.required
        ),
        EfctvEndDt: new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
        RootDomain: new FormControl('', Validators.required),
    });

    @Input() public set model(obj) {
        this.form.reset(obj);
    }
    @Input() isNew;

    constructor(private dialogRef: MatDialogRef<TenantsDialogFormComponent>) {}

    closeHandler(event: any) {
        this.dialogRef.close(event);
    }
}
