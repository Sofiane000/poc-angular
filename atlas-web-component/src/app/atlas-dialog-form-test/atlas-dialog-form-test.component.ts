import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'atlas-dialog-form-test',
    templateUrl: './atlas-dialog-form-test.component.html',
    styleUrls: ['./atlas-dialog-form-test.component.scss'],
})
export class AtlasDialogFormTestComponent implements OnInit {
    form: FormGroup = new FormGroup({
        Name: new FormControl('', Validators.required),
    });
    
  constructor(private dialogRef: MatDialogRef<AtlasDialogFormTestComponent>) {}
    
  ngOnInit() {}

    closeHandler(actions) {
        this.dialogRef.close();
    }
}
