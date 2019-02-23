import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AtlasGridComponent, IAtlasFooterbtn, IColumnSetting } from '@atlas/web-components';
import { ChaseManagementDialogComponent } from '../chase-management-dialog/chase-management-dialog.component';
import { ChaseMembersService } from '../shared/chase-members.service';

@Component({
  selector: 'lib-chase-member-search-form',
  templateUrl: './chase-member-search-form.component.html',
  styleUrls: ['./chase-member-search-form.component.scss']
})
export class ChaseMemberSearchFormComponent implements OnInit {
  memberSearchForm: FormGroup = new FormGroup({
    Member: new FormControl('', Validators.required),
    DOB: new FormControl(new Date())
  });
  membersServiceChild: ChaseMembersService;
  buttons: IAtlasFooterbtn[] = [{
    text: 'Cancel',
    action: 'close',
    title: 'Cancel'
  }, {
    text: 'Select',
    action: 'select',
    title: 'Select',
    primary: true,
    isDisabled: true
  }];
  gridState: any = {
    pageSize: 10,
  };
  selectableSettings: any = {
    enabled: true,
    mode: 'single',
    checkboxOnly: false,
  };
  sortable: any = {
    allowUnsort: true,
    mode: 'multiple',
  };
  columnsData: IColumnSetting[];
  selectedKeys: any[] = [];
  selectBy = 'key';
  isMembersFound = true;
  @ViewChild(AtlasGridComponent)
  public atlasGrid: AtlasGridComponent;

  constructor(private dialogRef: MatDialogRef<ChaseManagementDialogComponent>, private membersService: ChaseMembersService) {
    this.memberSearchForm.valueChanges.subscribe((changes) => {
      if (!this.membersServiceChild) {
        setTimeout(() => {
          this.membersServiceChild = this.membersService;
        }, 100);
      }
    });

  }

  ngOnInit() {
    this.initialization();
  }

  initialization() {
    this.columnsData = this.columnsData = [
      {
        field: 'IndvSK',
        title: 'Member ID',
        width: 60
      },
      {
        field: 'FirstName',
        title: 'First Name',
        width: 60
      },
      {
        field: 'LastName',
        title: 'Last Name',
        width: 60
      },
      {
        field: 'DOB',
        title: 'Member DOB',
        width: 60
      },
      {
        field: 'memberGender',
        title: 'Gender',
        width: 60
      }
    ];
  }

  closeHandler(actions) {
    this.dialogRef.close(actions);
  }

  valueChangeHandler(event) { }

  onSelectionChange(event) {
    setTimeout(() => {
      this.buttons[1].isDisabled = this.atlasGrid.selectedKeys.length <= 0 ? true : false;
    }, 100);
  }

  onSearch(event) {
    if (this.membersServiceChild) {
      this.atlasGrid.ngOnInit();
    }
  }

}
