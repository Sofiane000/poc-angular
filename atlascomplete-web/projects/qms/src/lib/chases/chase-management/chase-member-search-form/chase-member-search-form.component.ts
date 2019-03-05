import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { AtlasGridComponent, IAtlasFooterbtn, IColumnSetting } from '@atlas/web-components';
import { ChaseManagementDialogComponent } from '../chase-management-dialog/chase-management-dialog.component';
import { ChaseMembersService } from '../shared/chase-members.service';

@Component({
    selector: 'lib-chase-member-search-form',
    templateUrl: './chase-member-search-form.component.html',
    styleUrls: ['./chase-member-search-form.component.scss'],
})
export class ChaseMemberSearchFormComponent implements OnInit {
    memberSearchForm: FormGroup = new FormGroup({
        FirstName: new FormControl('', Validators.required),
        DOB: new FormControl(undefined),
    });
    membersServiceChild: ChaseMembersService;
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
        pageSize: 100,
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
    isDisabled = true;
    @ViewChild(AtlasGridComponent)
    public atlasGrid: AtlasGridComponent;

    constructor(
        private dialogRef: MatDialogRef<ChaseManagementDialogComponent>,
        private membersService: ChaseMembersService
    ) {
        this.membersServiceChild = this.membersService;

        this.memberSearchForm.valueChanges.subscribe((values) => {
            this.isDisabled = this.memberSearchForm.valid ? false : true;
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
                width: 60,
            },
            {
                field: 'FirstName',
                title: 'First Name',
                width: 60,
            },
            {
                field: 'LastName',
                title: 'Last Name',
                width: 60,
            },
            {
                field: 'DOB',
                title: 'Member DOB',
                width: 60,
            },
            {
                field: 'Gender',
                title: 'Gender',
                width: 60,
            },
        ];
    }

    closeHandler(actions) {
        this.membersService.autoLoad = false;
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
        this.membersService.autoLoad = true;
        this.membersServiceChild.query(this.gridState);
    }

    buildFilters(): void {
        const formValues = this.memberSearchForm.value;

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
