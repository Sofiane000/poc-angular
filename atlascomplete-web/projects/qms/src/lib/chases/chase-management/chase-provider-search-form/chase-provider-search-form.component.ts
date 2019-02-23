import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AtlasGridComponent, IAtlasFooterbtn, IColumnSetting } from '@atlas/web-components';
import { ChaseManagementDialogComponent } from '../chase-management-dialog/chase-management-dialog.component';

@Component({
  selector: 'lib-chase-provider-search-form',
  templateUrl: './chase-provider-search-form.component.html',
  styleUrls: ['./chase-provider-search-form.component.scss']
})
export class ChaseProviderSearchFormComponent implements OnInit {
  providerSearchForm: FormGroup = new FormGroup({
    Provider: new FormControl('', Validators.required)
  });
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
  isProvidersFound = true;
  @ViewChild(AtlasGridComponent)
  public atlasGrid: AtlasGridComponent;

  constructor(private dialogRef: MatDialogRef<ChaseManagementDialogComponent>) { }

  ngOnInit() {
    this.initialization();
  }

  initialization() {
    this.columnsData = this.columnsData = [
      {
        field: 'providerID',
        title: 'Provider Name',
        width: 60
      },
      {
        field: 'providerFirstName',
        title: 'Provider Name',
        width: 60
      }
    ];
  }

  closeHandler(actions) {
    this.dialogRef.close();
  }

  valueChangeHandler(event) { }

  onSelectionChange(event) {
    setTimeout(() => {
      this.buttons[1].isDisabled = this.atlasGrid.selectedKeys.length <= 0 ? true : false;
    }, 100);
  }

  onSearch(event) {

  }

}
