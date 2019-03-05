import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AtlasGridComponent, IAtlasFooterbtn, IColumnSetting } from '@atlas/web-components';
import { ChaseManagementDialogComponent } from '../chase-management-dialog/chase-management-dialog.component';
import { ChaseProviderService } from '../shared/chase-provider.service';

@Component({
    selector: 'lib-chase-provider-search-form',
    templateUrl: './chase-provider-search-form.component.html',
    styleUrls: ['./chase-provider-search-form.component.scss'],
})
export class ChaseProviderSearchFormComponent implements OnInit {
    providerSearchForm: FormGroup = new FormGroup({
        FirstName: new FormControl('', Validators.required),
    });
    buttons: IAtlasFooterbtn[] = [
        {
            text: 'Cancel',
            action: 'close',
            title: 'Cancel',
        },
        {
            text: 'Select',
            action: 'select',
            title: 'Select',
            primary: true,
            isDisabled: true,
        },
    ];
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
    providerServiceChild: ChaseProviderService;
    isDisabled = true;
    @ViewChild(AtlasGridComponent)
    public atlasGrid: AtlasGridComponent;

    constructor(
        private providerService: ChaseProviderService,
        private dialogRef: MatDialogRef<ChaseManagementDialogComponent>
    ) {
        this.providerServiceChild = this.providerService;

        this.providerSearchForm.valueChanges.subscribe((values) => {
            this.isDisabled = this.providerSearchForm.valid ? false : true;
        });
    }

    ngOnInit() {
        this.initialization();
    }

    initialization() {
        this.columnsData = this.columnsData = [
            {
                field: 'ProvID',
                title: 'Provider ID',
                width: 60,
            },
            {
                field: 'FirstName',
                title: 'Provider Name',
                width: 60,
            },
        ];
    }

    closeHandler(actions) {
        this.providerService.autoLoad = false;
        this.dialogRef.close(actions);
    }

    valueChangeHandler(event) {}

    onSelectionChange(event) {
        setTimeout(() => {
            this.buttons[1].isDisabled = this.atlasGrid.selectedKeys.length <= 0 ? true : false;
        }, 100);
    }

    onSearch(event) {
        this.buildFilters();
        this.atlasGrid.data = [];
        this.atlasGrid.gridDataResult = null;
        this.providerService.autoLoad = true;
        this.providerServiceChild.query(this.gridState);
    }

    buildFilters(): void {
        const formValues = this.providerSearchForm.value;

        this.clearFilters();

        for (const value in formValues) {
            if (formValues[value] !== '' && formValues[value] !== null) {
                if (!Array.isArray(formValues[value])) {
                    this.addFilter('contains', 'string', value, formValues[value]);
                } else if (formValues[value].length > 0) {
                    this.addFilter('contains', 'string', value, formValues[value][0]);
                }
            }
        }
    }

    addFilter(operator: string, dataType: string, property: string, value: any) {
        this.gridState.searchFilters.push({
            operator,
            property,
            value,
        });
    }

    clearFilters() {
        this.gridState.searchFilters = [];
    }
}
