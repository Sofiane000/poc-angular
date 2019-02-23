import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { IAtlasFooterbtn } from '@atlas/web-components';
import { ChaseManagementDialogComponent } from '../chase-management-dialog/chase-management-dialog.component';

@Component({
  selector: 'lib-update-chase-status-form',
  templateUrl: './update-chase-status-form.component.html',
  styleUrls: ['./update-chase-status-form.component.scss']
})
export class UpdateChaseStatusFormComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({
    Status: new FormControl([], Validators.required),
    Resolution: new FormControl([], Validators.required),
    Notes: new FormControl('')
  });
  statuses: string[] = ['Open', 'Closed'];
  resolutions: string[] = ['Found', 'Not Found'];
  isDisabled = true;
  buttons: IAtlasFooterbtn[] = [{
    text: 'Cancel',
    action: 'close',
    title: 'Cancel'
  }, {
    text: 'Update',
    action: 'update',
    title: 'Update',
    primary: true,
    isDisabled: true
  }];
  isStatusSelected = false;
  isResolutionSelected = false;
  
  constructor(private dialogRef: MatDialogRef<ChaseManagementDialogComponent>) {
    this.updateForm.valueChanges.subscribe((changes) => {
      this.buttons[1].isDisabled = this.updateForm.valid ? false : true;
    });
   }

  ngOnInit() {
  }

  closeHandler(actions) {
    this.dialogRef.close(actions);
  }

}
 