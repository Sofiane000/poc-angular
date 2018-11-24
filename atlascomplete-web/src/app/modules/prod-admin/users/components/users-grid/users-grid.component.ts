import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IColumnSetting, AtlasDialogService } from 'atlas-ui-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UsersDeleteDialogComponent } from '../users-dialog/users-delete-dialog.component';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
const saveAction = { text: 'Save', primary: true };
const cancelAction = { text: 'Cancel' };
@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {
  gridState: any = {
    skip: 0,
    take: 5,
    filter: {
      logic: 'and',
      filters: [{ field: 'FirstName', operator: 'contains', value: '' }]
    }
  };
  pdfOption: any = {
    fileName: 'Atlas-user-grid.pdf',
    allPages: true,
    paperSize: 'A4',
    repeatHeaders: true,
    landscape: true,
    title: 'Atlas users'
  };
  excelOption: any = {
    fileName: 'Atlas-user-grid.xlsx',
    title: 'Atlas users'
  };
  selectableSettings: any = {
    enabled: true,
    mode: 'single',
    checkboxOnly: true
  };
  sortable: any = {
    allowUnsort: true,
    mode: 'multiple'
  };
  columnsData: IColumnSetting[];
  peopleServiceChild: PeopleService;
  userServiceChild: UserService;
  selectedKeys: any[] = [];
  selectBy = 'cf_LoginID';
  @ViewChild('container', { read: ViewContainerRef })
  public containerRef: ViewContainerRef;
  dialogRef: any;
  constructor(private authService: AuthenticationService,
    private userService: UserService,
    private peopleService: PeopleService,
    private atlasDialogService: AtlasDialogService,
    private router: Router, private dialog: MatDialog,
    private route: ActivatedRoute) {
    this.peopleServiceChild = peopleService;
    this.userServiceChild = userService;
  }
  ngOnInit() {
    this.initialization();
  }
  initialization() {
    this.columnsData = this.columnsData = [
      {
        field: 'FirstName',
        title: 'First Name',
        width: 60,
        isFilterable: true
      },
      {
        field: 'LastName',
        title: 'Last Name',
        width: 60,
        isFilterable: true
      },
      {
        field: 'cf_LoginID',
        title: 'Username',
        width: 60,
        isFilterable: true
      },
      {
        field: 'cf_UserType',
        title: 'UserType',
        width: 60,
        isFilterable: true
      },
      {
        field: 'cf_TenantTaxnmyName',
        title: 'Tenants',
        width: 60,
        isFilterable: true
      },
      {
        field: 'UserStatTypeCode',
        title: 'Status',
        width: 60,
        isFilterable: true,
      },
      {
        field: 'UserActvtnInd',
        title: 'Active',
        width: 60,
        showTemplate: true,
        isFilterable: true,
        type: 'boolean'

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
    this.router.navigate(['/administration/users/' + dataItem.LoginSK + '/tenants']);
    // this.router.navigate(['/grid/details']);
  }
  showEditDialog(dataItem) {
    const isNew = dataItem ? false : true;
    this.userService.selectedUser = dataItem;
    this.authService.isRefreshed = true;
    this.router.navigate(['administration/users/action/' + (isNew ? 'add' : 'edit')]);
    // const dialogRef = this.atlasDialogService.open({
    //   appendTo: this.containerRef,
    //   title: !dataItem ? 'Add new user' : 'Edit user',
    //   content: UsersDialogFormComponent,
    //   actions: [
    //     cancelAction,
    //     saveAction
    //   ],
    //   width: 450,
    //   height: 450
    // });
    // const editForm = dialogRef.content.instance;
    // editForm.isNew = isNew;
    // editForm.model = isNew ? {} : dataItem;
    // dialogRef.beforeClose().subscribe(reponse => {
    //   this.router.navigate([{ outlets: { modal: null } }], { relativeTo: this.route });
    // });
    // dialogRef.afterClosed().subscribe((dialogResult: any) => {
    //   this.selectedKeys = [];
    //   this.isDialogClosed = true;

    // });
  }
  removeHandler(dataItem) {
    // const dialog = this.atlasDialogService.open({
    //   appendTo: this.containerRef,
    //   title: 'Please confirm',
    //   content: 'Are you sure?',
    //   actions: [
    //     { text: 'No' },
    //     { text: 'Yes', primary: true }
    //   ],
    //   width: 450,
    //   height: 200,
    //   minWidth: 250
    // });

    // dialog.result.subscribe((result: any) => {
    //   if (result.text && result.text.toLowerCase() === 'yes') {
    //     // delete row
    //   } else {
    //     this.selectedKeys = [];
    //   }
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    dialogConfig.closeOnNavigation = true;
    const dialogRef = this.dialog.open(UsersDeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.toLowerCase() === 'save') {
        // delete row
      }
      this.selectedKeys = [];

    });
  }
}
