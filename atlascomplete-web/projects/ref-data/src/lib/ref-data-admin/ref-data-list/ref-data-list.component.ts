import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import {
    AtlasGridComponent,
    AtlasTreeComponent,
    ButtonAction,
    IAtlasToolbarButton,
    IColumnSetting,
} from '@atlas/web-components';
import { ISplitter } from '@atlas/web-components/lib/atlas-splitter/components/splitter';
import { TenantsService } from '../../../../../idm/src/lib/tenants/shared/tenants.service';
import { RefDataListDeleteDialogComponent } from '../ref-data-list-dialog/ref-data-list-delete-dialog.component';
import { RefDataListService } from '../shared/ref-data-list.service';

@Component({
    selector: 'lib-ref-data-list',
    templateUrl: './ref-data-list.component.html',
    styleUrls: ['./ref-data-list.component.css'],
})
export class RefDataListComponent implements OnInit {
    leftPaneSetting: ISplitter = {
        collapsible: false,
        size: '25%',
        resizable: true,
    };
    rightPaneSetting: ISplitter = {
        collapsible: false,
        size: null,
        resizable: true,
    };
    treeData: any[] = [];
    columnsData: IColumnSetting[];
    refDataListChild: RefDataListService;
    gridState: any = {
        pageSize: 50,
    };
    selectedTreeKeys: any[] = ['0'];
    selectedGridKeys: any[] = [];
    selectedTenantSK;
    selectableSettings = {
        checkboxOnly: false,
        mode: 'single',
    };
    treeButtons: IAtlasToolbarButton[] = [];
    gridButtons: IAtlasToolbarButton[] = [];
    @ViewChild(AtlasTreeComponent) treeView: AtlasTreeComponent;
    @ViewChild(AtlasGridComponent) public atlasGrid: AtlasGridComponent;

    constructor(
        private tenantService: TenantsService,
        private refDataListService: RefDataListService,
        private dialog: MatDialog,
        private router: Router
    ) {
        this.refDataListChild = refDataListService;
        this.refDataListService.getSaveSubject().subscribe((response) => {
            this.saveRefDataListFromDialog(response.isAdd, response.data);
        });
    }

    ngOnInit() {
        this.tenantService.subscribe((treeData) => {
            this.treeData = treeData;
        });
        this.columnsData = [
            {
                field: 'ListTypeName',
                title: 'Reference List Name',
                isFilterable: true,
            },
            {
                field: 'ListTypeDesc',
                title: 'Description',
                isFilterable: true,
            },
        ];
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
        }
    }

    showAddEditDialog(dataItem) {
        const isNew = dataItem ? false : true;

        this.router.navigate([
            'ref-data/administration/action/' + (isNew ? 'add' : 'edit/' + dataItem.ListTypeSK),
        ]);
    }

    viewHandler({ dataItem }) {
        this.selectedTenantSK = this.selectedTenantSK
            ? this.selectedTenantSK
            : this.treeView.partialData[0].TenantTaxnmySK;

        this.router.navigate([
            '/ref-data/administration/tenant/' +
                this.selectedTenantSK +
                '/detail/' +
                dataItem.ListTypeSK,
        ]);
    }

    onTreeSelectionChange(event) {
        this.selectedTenantSK = event.selectedItem.TenantTaxnmySK;
    }

    dblClickHandler(obj) {
        this.showAddEditDialog(obj);
    }

    saveRefDataListFromDialog(isAdd, data) {
        if (isAdd) {
            data.ListTypeSK = this.atlasGrid.data.length + 1;
            this.atlasGrid.data.push(data);
        } else {
            const index = this.atlasGrid.data.findIndex(
                (item) => item.ListTypeSK === data.ListTypeSK
            );
            if (index !== -1) {
                this.atlasGrid.data[index] = { ...data };
            }
        }
        this.selectedGridKeys = [];
        this.atlasGrid.refreshGrid();
    }

    removeHandler(dataItem?: any) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = '500px';
        dialogConfig.height = '137px';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.panelClass = 'custom-dialog-container';
        const dialogRef = this.dialog.open(RefDataListDeleteDialogComponent, dialogConfig);
        dialogRef.afterClosed().subscribe((result: any) => {
            if (result && result.toLowerCase() === 'save') {
                // delete row
                const index = this.atlasGrid.data.findIndex(
                    (item) => item.ListTypeSK === dataItem.ListTypeSK
                );
                if (index !== -1) {
                    this.atlasGrid.data.splice(index, 1);
                }
            }
            this.selectedGridKeys = [];
            this.atlasGrid.refreshGrid();
        });
    }
}
