import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IColumnSetting, AtlasDialogService, AtlasToolbarButton, ButtonAction, AtlasGridComponent } from 'atlas-ui-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UsersDeleteDialogComponent } from '../users-dialog/users-delete-dialog.component';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { DocumentViewerService } from 'src/app/modules/doc-viewer/services/doc-viewer.service';
@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.scss'],
  providers: [DocumentViewerService]
})
export class UsersGridComponent implements OnInit {
  buttons: AtlasToolbarButton[] = [
    {
      title: 'Add',
      action: ButtonAction.Add,
      icon: 'fa-plus',
    },
    {
      title: 'Edit',
      action: ButtonAction.Edit,
      icon: 'fa-pencil',
      isDisabled: true
    },
    {
      title: 'Remove',
      action: ButtonAction.Remove,
      icon: 'fa-trash',
      isDisabled: true
    },
    {
      title: 'Refresh',
      action: ButtonAction.Refresh,
      icon: 'fa-refresh',
      class: 'refresh-btn'
    },
    {
      title: 'Onboarding',
      isTextButton: true,
      text: 'SEND ONBOARDING EMAIL',
      isDisabled: true
    },
    {
      title: 'Print Invoice',
      action: ButtonAction.PrintInvoice,
      icon: 'fa-print',
      class: 'grid-pdf'
    },
    {
      title: 'Export As Pdf',
      action: ButtonAction.ExportAsPdf,
      icon: 'fa-file-pdf-o',
      class: 'grid-pdf'
    },
    {
      title: 'Export As Excel',
      action: ButtonAction.ExportAsExcel,
      icon: 'fa-file-excel-o',
      class: 'grid-excel'
    },
  ];
  gridState: any = {
    skip: 0,
    take: 5
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
  @ViewChild(AtlasGridComponent)
  public atlasGrid: AtlasGridComponent;
  constructor(private authService: AuthenticationService,
    private userService: UserService,
    private peopleService: PeopleService,
    private atlasDialogService: AtlasDialogService,
    private router: Router, private dialog: MatDialog,
    private route: ActivatedRoute,
    private docViewer: DocumentViewerService) {
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
        width: 40,
        showTemplate: true,
        isFilterable: true,
        type: 'boolean'

      }
    ];
  }

  viewHandler({ dataItem }) {
    this.userService.selectedUser = dataItem;
    this.router.navigate(['/administration/users/' + dataItem.LoginSK + '/tenants']);
    // this.router.navigate(['/grid/details']);
  }
  showAddEditDialog(dataItem) {
    const isNew = dataItem ? false : true;
    this.userService.selectedUser = dataItem;
    this.router.navigate(['administration/users/action/' + (isNew ? 'add' : 'edit/' + dataItem.LoginSK)]);
  }
  removeHandler(dataItem?: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '137px';
    dialogConfig.closeOnNavigation = true;
    dialogConfig.panelClass = 'custom-dialog-container';
    const dialogRef = this.dialog.open(UsersDeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.toLowerCase() === 'save') {
        // delete row
      }
      this.selectedKeys = [];
      this.onSelectionChange();

    });
  }
  actionHandler(eventResponse: any) {
    switch (eventResponse.action) {
      case ButtonAction.Add:
        this.showAddEditDialog(null);
        break;
      case ButtonAction.Edit:
        this.showAddEditDialog(this.atlasGrid.selectedKeys[0]);
        break;
      case ButtonAction.Remove:
        this.removeHandler(this.atlasGrid.selectedKeys[0]);
        break;
      case ButtonAction.Refresh:
        this.atlasGrid.state.filter = null;
        this.atlasGrid.state.sort = [];
        this.atlasGrid.state.group = [];
        this.atlasGrid.refreshGrid();
        break;
      case ButtonAction.ExportAsExcel:
        this.atlasGrid.exportAsExcel();
        break;
      case ButtonAction.ExportAsPdf:
        this.atlasGrid.exportAsPdf();
        break;
      case ButtonAction.PrintInvoice:
        this.docViewer.showDocument('sample.pdf');
        break;
    }
  }
  onSelectionChange() {
    setTimeout(() => {

      if (this.atlasGrid.selectedKeys.length <= 0) {
        this.buttons[1].isDisabled = true;
        this.buttons[2].isDisabled = true;
        this.buttons[4].isDisabled = true;

      } else {
        this.buttons[1].isDisabled = false;
        this.buttons[2].isDisabled = false;
        this.buttons[4].isDisabled = false;
      }
    }, 100);

  }
}
