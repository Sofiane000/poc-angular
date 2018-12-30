import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-menus-dialog-form',
    templateUrl: './menus-dialog-form.component.html',
    styleUrls: ['./menus-dialog-form.component.scss'],
})
export class MenusDialogFormComponent {
    form: FormGroup = new FormGroup({
        MenuName: new FormControl('', Validators.required),
        EfctvStartDt: new FormControl(
            new Date().toISOString().substring(0, 10),
            Validators.required
        ),
        EfctvEndDt: new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
        RootDomain: new FormControl('', Validators.required),
    });

    @Input()
    public set model(obj) {
        this.form.reset(obj);
    }
    @Input() isNew;

    constructor(private dialogRef: MatDialogRef<MenusDialogFormComponent>) {}

    closeHandler(event) {
        this.dialogRef.close(event);
    }
}
