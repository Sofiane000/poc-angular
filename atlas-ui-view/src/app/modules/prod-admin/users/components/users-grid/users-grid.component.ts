import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IColumnSetting, AtlasDialogService } from 'atlas-ui-angular';
import { Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { UsersDialogFormComponent } from '../users-dialog/users-dialog.component';
const saveAction = { text: 'Save', primary: true };
const cancelAction = { text: 'Cancel' };
@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html'
})
export class UsersGridComponent implements OnInit {
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
  peopleServiceChild: PeopleService;
  userServiceChild: UserService;
  selectedKeys: any[] = [];
  selectBy = 'cf_LoginID';
  @ViewChild('container', { read: ViewContainerRef })
  public containerRef: ViewContainerRef;
  constructor(private userService: UserService, private peopleService: PeopleService, private atlasDialogService: AtlasDialogService,
    private router: Router) {
    this.peopleServiceChild = peopleService;
    this.userServiceChild = userService;
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
    this.userService.selectedUser = dataItem;
    this.router.navigate(['/administration/users/' + dataItem.LoginSK + '/details']);
    // this.router.navigate(['/grid/details']);
  }
  showEditDialog(dataItem) {
    const isNew = dataItem ? false : true;
    const dialogRef = this.atlasDialogService.open({
      appendTo: this.containerRef,
      title: !dataItem ? 'Add new user' : 'Edit user',
      content: UsersDialogFormComponent,
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