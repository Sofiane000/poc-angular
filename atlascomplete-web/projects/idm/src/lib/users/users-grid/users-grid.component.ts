import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import {
    AtlasGridComponent,
    AtlasToolbarComponent,
    AtlasUploadService,
    ButtonAction,
    IAtlasToolbarButton,
    IColumnSetting,
} from '@atlas/web-components';
import { FileUploadService } from '@atlas/web-services';
import { DocumentViewerService } from 'src/app/modules/doc-viewer/services/doc-viewer.service';
import { UserService } from '../shared/user.service';
import { UsersDeleteDialogComponent } from '../users-dialog/users-delete-dialog.component';

@Component({
    selector: 'app-users-grid',
    templateUrl: './users-grid.component.html',
    styleUrls: ['./users-grid.component.scss'],
    providers: [DocumentViewerService, AtlasUploadService],
})
export class UsersGridComponent implements OnInit, OnDestroy {
    buttons: IAtlasToolbarButton[] = [
        {
            title: 'Onboarding',
            isTextButton: true,
            text: 'SEND ONBOARDING EMAIL',
            isDisabled: true,
        },
        {
            title: 'Print Invoice',
            action: ButtonAction.PrintInvoice,
            icon: 'fa-print',
            class: 'grid-pdf',
        },
        {
            title: 'Export As Pdf',
            action: ButtonAction.ExportAsPdf,
            icon: 'fa-file-pdf-o',
            class: 'grid-pdf',
        },
        {
            title: 'Export As Excel',
            action: ButtonAction.ExportAsExcel,
            icon: 'fa-file-excel-o',
            class: 'grid-excel',
        },
    ];
    gridState: any = {
        pageSize: 10,
    };
    pdfOption: any = {
        fileName: 'Atlas-user-grid.pdf',
        allPages: true,
        paperSize: 'A4',
        repeatHeaders: true,
        landscape: true,
        title: 'Atlas users',
    };
    excelOption: any = {
        fileName: 'Atlas-user-grid.xlsx',
        title: 'Atlas users',
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
    userServiceChild: UserService;
    selectedKeys: any[] = [];
    selectBy = 'cf_LoginID';
    @ViewChild('container', { read: ViewContainerRef })
    public containerRef: ViewContainerRef;
    @ViewChild(AtlasGridComponent)
    public atlasGrid: AtlasGridComponent;
    @ViewChild(AtlasToolbarComponent)
    toolbar: AtlasToolbarComponent;

    constructor(
        private userService: UserService,
        private router: Router,
        private dialog: MatDialog,
        private docViewer: DocumentViewerService,
        private uploadService: AtlasUploadService,
        private fileUploadService: FileUploadService
    ) {
        this.userServiceChild = userService;
        this.userService.getSaveSubject().subscribe((response) => {
            this.saveUserFromDialog(response.isAdd, response.data);
        });
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
                isFilterable: true,
            },
            {
                field: 'LastName',
                title: 'Last Name',
                width: 60,
                isFilterable: true,
            },
            {
                field: 'cf_LoginID',
                title: 'Username',
                width: 60,
                isFilterable: true,
                media: '(min-width: 500px)',
            },
            {
                field: 'cf_UserType',
                title: 'UserType',
                width: 60,
                isFilterable: true,
                media: '(min-width: 768px)',
            },
            {
                field: 'cf_TenantTaxnmyName',
                title: 'Tenants',
                width: 60,
                isFilterable: true,
                media: '(min-width: 768px)',
            },
            {
                field: 'UserStatTypeCode',
                title: 'Status',
                width: 60,
                isFilterable: true,
                media: '(min-width: 500px)',
            },
            {
                field: 'UserActvtnInd',
                title: 'Active',
                width: 40,
                showTemplate: true,
                isFilterable: true,
                type: 'boolean',
                media: '(min-width: 768px)',
            },
        ];
    }

    viewHandler({ dataItem }) {
        this.userService.selectedUser = dataItem;
        this.router.navigate(['/idm/users/' + dataItem.LoginSK + '/tenants']);
        // this.router.navigate(['/grid/details']);
    }

    showAddEditDialog(dataItem) {
        const isNew = dataItem ? false : true;
        this.userService.selectedUser = dataItem;
        this.router.navigate(['idm/users/action/' + (isNew ? 'add' : 'edit/' + dataItem.LoginSK)]);
    }

    saveUserFromDialog(isAdd, data) {
        if (isAdd) {
            this.userService.addUser(data).subscribe((result) => {
                this.atlasGrid.data = [...result];
                this.atlasGrid.gridDataResult = {
                    data: this.atlasGrid.data,
                    total: this.atlasGrid.data.length,
                };
            });
        } else {
            this.userService.updateUser(data).subscribe((result) => {
                this.atlasGrid.data = [...result];
                this.atlasGrid.gridDataResult = {
                    data: this.atlasGrid.data,
                    total: this.atlasGrid.data.length,
                };
            });
        }
        this.atlasGrid.selectedKeys = [];
        this.toolbar.onSelectionChanged(false);
    }

    removeHandler(dataItem?: any) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = '500px';
        dialogConfig.height = '150px';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.panelClass = 'custom-dialog-container';
        const dialogRef = this.dialog.open(UsersDeleteDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result: any) => {
            if (result && result.toLowerCase() === 'save') {
                // delete row
                this.userService.deleteById(dataItem.LoginSK).subscribe((res) => {
                    console.log(res);
                    const index = this.atlasGrid.data.findIndex(
                        (item) => item.LoginSK === dataItem.LoginSK
                    );
                    if (index !== -1) {
                        this.atlasGrid.data.splice(index, 1);
                    }
                });
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
            case ButtonAction.Upload:
                this.showUploadDialog();
                break;
            case ButtonAction.Search:
                this.searchGrid();
                break;
            case ButtonAction.SearchClear:
                this.clearSearchGrid();
                break;
        }
    }

    searchGrid(): any {
        this.gridState.searchFilters = [
            {
                operator: 'contains', // filter.operator
                property: 'FirstName',
                value: this.toolbar.filterValue,
            },
        ];
        this.userService.rowId = '';
        this.atlasGrid.data = [];
        this.atlasGrid.gridDataResult = null;
        this.userService.query(this.gridState);
    }

    clearSearchGrid(): any {
        this.gridState.searchFilters = [];
        this.userService.query(this.gridState);
    }

    showUploadDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = '600px';
        dialogConfig.height = '300px';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.panelClass = 'custom-dialog-container-upload';
        const listOfFields = new Map<string, any>();
        listOfFields.set('name', 'hello');

        this.uploadService
            .show(
                'Upload Reference Data',
                dialogConfig,
                {
                    uploadRestrictions: { allowedExtensions: ['.xlsx', '.csv'] },
                    autoUpload: false,
                    multiple: true,
                },
                null,
                null
            )
            .subscribe((result) => {
                if (result.action === 'save') {
                    this.fileUploadService.uploadFile('emprt', result.files, listOfFields);
                }
                console.log(result);
            });
    }

    onSelectionChange() {
        setTimeout(() => {
            this.buttons[0].isDisabled = this.atlasGrid.selectedKeys.length <= 0 ? true : false;
        }, 100);
    }

    dblClickHandler(obj) {
        this.showAddEditDialog(obj);
    }

    ngOnDestroy(): void {
        this.userService.rowId = '';
    }
}
