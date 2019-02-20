import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AtlasGridComponent,
    AtlasUploadService,
    ButtonAction,
    IAtlasToolbarButton,
    IColumnSetting,
} from '@atlas/web-components';
import { Subscription } from 'rxjs';
import { TenantsService } from '../../../../../idm/src/lib/tenants/shared/tenants.service';
import { RefDataDetailDeleteDialogComponent } from '../ref-data-detail-dialog/ref-data-detail-delete-dialog.component';
import { RefDataDetailService } from '../shared/ref-data-detail.service';
import { RefDataListService } from '../shared/ref-data-list.service';

@Component({
    selector: 'lib-ref-data-detail',
    templateUrl: './ref-data-detail.component.html',
    styleUrls: ['./ref-data-detail.component.css'],
})
export class RefDataDetailComponent implements OnInit {
    selectedTenant: any;
    selectedRefData: any;
    columnsData: IColumnSetting[];
    referenceDataDetailChild: RefDataDetailService;
    gridState: any = {
        pageSize: 60,
    };
    gridButtons: IAtlasToolbarButton[] = [];
    detailData = [];
    selectedGridKeys: any[] = [];
    selectableSettings = {
        checkboxOnly: false,
        mode: 'single',
    };
    routeSubscription: Subscription;
    tenantSK: number;
    typeSK: number;

    @ViewChild(AtlasGridComponent) public atlasGrid: AtlasGridComponent;

    constructor(
        private router: Router,
        private tenantService: TenantsService,
        private refDataListService: RefDataListService,
        private refDataDetailService: RefDataDetailService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private uploadDialogService: AtlasUploadService
    ) {
        this.routeSubscription = this.route.params.subscribe((params) => {
            this.tenantSK = +params['id'];
            this.typeSK = +params['id2'];
        });

        this.referenceDataDetailChild = refDataDetailService;

        this.refDataDetailService
            .getRefDataDetails(this.gridState, this.tenantSK, this.typeSK)
            .subscribe((detailData) => {
                this.detailData = detailData;
            });

        this.refDataDetailService.getSaveSubject().subscribe((response) => {
            this.saveRefDataDetailFromDialog(response.isAdd, response.data);
        });
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const tenantSK = +params['id'];
            const typeSK = +params['id2'];

            this.tenantService
                .getTenantById(tenantSK)
                .subscribe((selectedTenant) => (this.selectedTenant = selectedTenant));

            this.refDataListService
                .getRefDataListById(typeSK)
                .subscribe((selectedRefData) => (this.selectedRefData = selectedRefData));
        });

        this.columnsData = [
            {
                field: 'ListDtlCode',
                title: 'Reference Data Code',
                isFilterable: true,
            },
            {
                field: 'ListDtlDesc',
                title: 'Reference Data Value',
                isFilterable: true,
            },
            {
                field: 'EfctvStartDt',
                title: 'Effective Start Date',
                isFilterable: true,
            },
            {
                field: 'EfctvEndDt',
                title: 'Effective End Date',
                isFilterable: true,
            },
            {
                field: 'cf_ListItemIncluded',
                title: 'Active',
                width: 80,
                showTemplate: true,
                isFilterable: true,
                type: 'boolean',
                media: '(min-width: 768px)',
            },
            {
                field: 'ListTypeSK',
                title: 'SK',
                isFilterable: true,
            },
        ];
    }

    goBackHandler() {
        this.router.navigate(['/ref-data/administration']);
    }

    actionHandler(eventResponse: any) {
        switch (eventResponse.action) {
            case ButtonAction.Add:
                this.showAddEditDialog(null);
                break;
            case ButtonAction.Edit:
                this.showAddEditDialog(this.selectedGridKeys[0]);
                break;
            case ButtonAction.Remove:
                this.removeHandler(this.selectedGridKeys[0]);
                break;
            case ButtonAction.Upload:
                this.showUploadDialog();
                break;
        }
    }

    showAddEditDialog(dataItem) {
        const isNew = dataItem ? false : true;

        this.router.navigate([
            'ref-data/administration/tenant/' +
                this.tenantSK +
                '/detail/' +
                this.typeSK +
                '/action/' +
                (isNew ? 'add' : 'edit/' + dataItem.ListDtlSK),
        ]);
    }

    showUploadDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = '600px';
        dialogConfig.height = '300px';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.panelClass = 'custom-dialog-container';

        this.uploadDialogService
            .show(
                'Upload Reference Data',
                dialogConfig,
                {
                    uploadRestrictions: { allowedExtensions: [] },
                    autoUpload: false,
                    multiple: true,
                },
                null,
                null
            )
            .subscribe((result) => {
                console.log(result);
            });
    }

    saveRefDataDetailFromDialog(isAdd, data) {
        data.EfctvStartDt = this.formatDateString(data.EfctvStartDt);
        data.EfctvEndDt = this.formatDateString(data.EfctvEndDt);

        if (isAdd) {
            this.detailData.push(data);
        } else {
            const index = this.detailData.findIndex((item) => item.ListDtlSK === data.ListDtlSK);
            if (index !== -1) {
                this.detailData[index] = { ...data };
            }
        }
        this.selectedGridKeys = [];
    }

    formatDateString(date) {
        if (date instanceof Date) {
            const day = date.getDate().toString();
            const month = (date.getMonth() + 1).toString();

            return (
                date.getFullYear() +
                '-' +
                (month.length > 1 ? month : '0' + month) +
                '-' +
                (day.length > 1 ? day : '0' + day)
            );
        }

        return date;
    }

    removeHandler(dataItem?: any) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = '500px';
        dialogConfig.height = '137px';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.panelClass = 'custom-dialog-container';
        const dialogRef = this.dialog.open(RefDataDetailDeleteDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result: any) => {
            if (result && result.toLowerCase() === 'save') {
                // delete row
                const index = this.detailData.findIndex(
                    (item) => item.ListDtlSK === dataItem.ListDtlSK
                );
                if (index !== -1) {
                    this.detailData.splice(index, 1);
                }
            }

            this.selectedGridKeys = [];
        });
    }
}
