import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
import { IColumnSetting, AtlasDialogService } from 'atlas-ui-angular';
import { EditFormComponent } from './edit-form.component';
import { Router } from '@angular/router';
import { USER_DATA } from '../models/user';
const saveAction = { text: 'Save', primary: true };
const cancelAction = { text: 'Cancel' };
@Component({
  selector: 'app-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.css']
})
export class GridExampleComponent implements OnInit {
  gridState: any = {
    skip: 0,
    take: 100,
    filter: {
      logic: 'and',
      filters: [{ field: 'firstName', operator: 'contains', value: '' }]
    }
  };

  selectableSettings: any = {
    enabled: true,
    mode: 'single',
    checkboxOnly: true
  };

  columnsData: IColumnSetting[];
  service: UserService;
  selectedKeys: any[] = [];
  selectBy = 'cf_LoginID';
  @ViewChild('container', { read: ViewContainerRef })
  public containerRef: ViewContainerRef;
  constructor(private userService: UserService, private atlasDialogService: AtlasDialogService,
    private router: Router) {
    this.service = userService;
  }
  ngOnInit() {
    this.columnsData = this.columnsData = [
      {
        field: 'FirstName',
        title: 'First Name',
        width: 40
      },
      {
        field: 'LastName',
        title: 'Last Name',
        width: 40
      },
      {
        field: 'cf_LoginID',
        title: 'Username',
        width: 40,
      },
      {
        field: 'cf_UserType',
        title: 'UserType',
        width: 40,
      },
      {
        field: 'cf_TenantTaxnmyName',
        title: 'Tenants',
        width: 90
      },
      {
        field: 'UserStatTypeCode',
        title: 'Status',
        width: 30,
      },
      {
        field: 'UserActvtnInd',
        title: 'Active',
        width: 30,
        showTemplate: true
      }
    ];
  }

  addHandler(event) {
    this.showEditDialog(null);
  }

  editHandler(dataItem) {
    this.showEditDialog(dataItem);
  }

  viewHandler({ dataItem }) {
    this.router.navigate(['/grid/details']);
  }
  showEditDialog(dataItem) {
    const isNew = dataItem ? false : true;
    const dialogRef = this.atlasDialogService.open({
      appendTo: this.containerRef,
      title: !dataItem ? 'Add new user' : 'Edit user',
      content: EditFormComponent,
      actions: [
        cancelAction,
        saveAction
      ],
      width: 450,
      height: 450
    });
    const editForm = dialogRef.content.instance;
    editForm.isNew = isNew;
    editForm.model = isNew ? {} : dataItem;
    dialogRef.result.subscribe((dialogResult: any) => {
      if (dialogResult.text && dialogResult.text.toLowerCase() === 'save') {
        this.selectedKeys = [];
        //this.editService.save(object, isNew);
      }
    });
  }
  removeHandler(dataItem) {
    const dialog = this.atlasDialogService.open({
      appendTo: this.containerRef,
      title: 'Please confirm',
      content: 'Are you sure?',
      actions: [
        { text: 'No' },
        { text: 'Yes', primary: true }
      ],
      width: 450,
      height: 200,
      minWidth: 250
    });

    dialog.result.subscribe((result: any) => {
      if (result.text && result.text.toLowerCase() === 'yes') {
        // delete row
      } else {
        this.selectedKeys = [];
      }
    });
  }
}
