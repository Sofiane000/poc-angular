import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import {
    AtlasAutoCompleteComponent,
    AtlasGridComponent,
    AtlasToolbarComponent,
    ButtonAction,
    IAtlasToolbarButton,
    IColumnSetting,
} from '@atlas/web-components';
import { Observable, of, pipe } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    startWith,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { ChaseViewDescriptionComponent } from '../chase-view-description/chase-view-description.component';
import { ChaseMembersService } from '../shared/chase-members.service';
import { ChaseProviderService } from '../shared/chase-provider.service';
import { ChaseService } from '../shared/chase.service';

@Component({
    selector: 'lib-chase-management',
    templateUrl: './chase-management.component.html',
    styleUrls: ['./chase-management.component.scss'],
})
export class ChaseManagementComponent implements OnInit {
    showMemberNotFound: boolean;
    showProviderNotFound: boolean;
    @ViewChild(AtlasAutoCompleteComponent) autoComplete: AtlasAutoCompleteComponent;
    filteredOptions: Observable<any[]>;
    chaseForm: FormGroup = new FormGroup({
        initiative: new FormControl([], Validators.required),
        Assignee: new FormControl([]),
        MemberID: new FormControl(''),
        ProviderID: new FormControl(''),
    });
    buttons: IAtlasToolbarButton[] = [
        {
            title: 'Find Chases',
            icon: 'fa-search',
            class: 'chase-find',
        },
    ];
    filterButtons = [
        {
            title: 'Export As Pdf',
            action: ButtonAction.ExportAsPdf,
            icon: 'fa-download',
            class: 'grid-pdf',
            text: 'Export PDF',
        },
        {
            title: 'Export As Excel',
            action: ButtonAction.ExportAsExcel,
            icon: 'fa-download',
            class: 'grid-excel',
            text: 'Export Excel',
        },
    ];
    chaseButtons: IAtlasToolbarButton[] = [
        {
            title: 'Update Status',
            icon: 'fa-edit',
            class: 'chase-assign',
            action: ButtonAction.Edit,
            isDisabled: true,
        },
        {
            title: 'Assign to Work Queue',
            icon: 'fa-user',
            class: 'chase-assign',
            action: ButtonAction.Add,
            isDisabled: true,
        },
        {
            title: 'Export',
            icon: 'fa-download',
            class: 'grid-pdf',
            isFilterMenu: true,
        },
        {
            title: 'Show/Hide Columns',
            icon: 'fa-filter',
            class: 'grid-pdf',
            isColumnsMenu: true,
        },
    ];
    gridState: any = {
        pageSize: 10,
    };
    chaseServiceChild: ChaseService;
    pdfOption: any = {
        fileName: 'chase-grid.pdf',
        allPages: true,
        paperSize: 'A4',
        repeatHeaders: true,
        landscape: true,
        title: 'Chase Management',
    };
    excelOption: any = {
        fileName: 'chase-grid.xlsx',
        title: 'Chase Management',
    };
    selectableSettings: any = {
        enabled: true,
        mode: 'multiple',
        checkboxOnly: false,
    };
    sortable: any = {
        allowUnsort: true,
        mode: 'multiple',
    };
    initiativeWidth = '25%';
    columnsData: IColumnSetting[];
    initiatives: any[] = [
        { key: 'Initiative 1', value: 'Initiative 1' },
        { key: 'Initiative 2', value: 'Initiative 2' },
        { key: 'Initiative 3', value: 'Initiative 3' },
        { key: 'Initiative 4', value: 'Initiative 4' },
    ];
    assignees: any[] = [
        { key: 'Assignee 1', value: 'Assignee 1' },
        { key: 'Assignee 2', value: 'Assignee 2' },
        { key: 'Assignee 3', value: 'Assignee 3' },
        { key: 'Assignee 4', value: 'Assignee 4' },
    ];
    selectedKeys: any[] = [];
    selectBy = 'key';
    @ViewChild(AtlasGridComponent)
    public atlasGrid: AtlasGridComponent;
    @ViewChild(AtlasToolbarComponent)
    public atlasToolbar: AtlasToolbarComponent;
    showSearch = false;
    selectedMember: any;
    isMemberSelected = false;
    selectedProvider: any;
    isProviderSelected = false;
    visibility = 'hidden';
    checkBoxButtons: IAtlasToolbarButton[];

    constructor(
        private router: Router,
        private chaseService: ChaseService,
        private membersService: ChaseMembersService,
        private providerService: ChaseProviderService,
        private dialog: MatDialog
    ) {
        this.chaseServiceChild = this.chaseService;
        this.chaseForm.controls['initiative'].valueChanges.subscribe((value) => {
            this.onInitiativeChange(value);
        });

        this.chaseForm.controls['MemberID'].valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged()
            )
            .subscribe((res) => {
                if (res) {
                    this.onAutoCompleteSelectionChanged(res, 'IndvSK');
                } else {
                    this.showMemberNotFound = false;
                    this.isMemberSelected = false;
                }
            });

        this.chaseForm.controls['ProviderID'].valueChanges
            .pipe(
                debounceTime(400),
                distinctUntilChanged()
            )
            .subscribe((res) => {
                if (res) {
                    this.onAutoCompleteSelectionChanged(res, 'ProvSK');
                } else {
                    this.showProviderNotFound = false;
                    this.isProviderSelected = false;
                }
            });

        this.membersService.getSaveMemberSubject().subscribe((response) => {
            this.setMember(response.data);
        });
        this.providerService.getSaveProviderSubject().subscribe((response) => {
            this.setProvider(response.data);
        });
        this.chaseService.getSaveChaseSubject().subscribe((response) => {
            if (response.isAssign) {
                this.assignChase(response.data);
            } else {
                this.updateStatus(response.data);
            }
        });
    }

    ngOnInit() {
        this.initialization();
        this.chaseService.rowId = '';
        this.atlasGrid.data = [];
        this.atlasGrid.gridDataResult = null;
    }

    onAutoCompleteSelectionChanged(value: string, property: string) {
        this.gridState.searchFilters = [
            {
                operator: 'eq', // filter.operator
                property,
                value: +value,
                dataType: 'character',
            },
        ];
        this.chaseService.rowId = '';
        this.atlasGrid.data = [];
        this.atlasGrid.gridDataResult = null;
        if (property === 'IndvSK') {
            this.membersService.getMembersAutoComplete(this.gridState).subscribe((response) => {
                if (response && response.length > 0) {
                    this.selectedMember = {
                        IndvSK: response[0].IndvSK,
                        Name: response[0].FirstName + ' ' + response[0].LastName,
                        DOB: response[0].DOB,
                    };
                    this.isMemberSelected = true;
                    this.showMemberNotFound = false;
                } else {
                    this.showMemberNotFound = true;
                    this.isMemberSelected = false;
                }
            });
        } else if (property === 'ProvSK') {
            this.providerService.getProvidersAutoComplete(this.gridState).subscribe((response) => {
                if (response && response.length > 0) {
                    this.selectedProvider = {
                        ProvSK: response[0].ProvSK,
                        Name: response[0].FirstName + ' ' + response[0].LastName,
                    };
                    this.isProviderSelected = true;
                    this.showProviderNotFound = false;
                } else {
                    this.showProviderNotFound = true;
                    this.isProviderSelected = false;
                }
            });
        }
    }

    initialization() {
        this.columnsData = this.columnsData = [
            {
                field: 'memberFirstName',
                title: 'Member Name',
                width: 60,
                isFilterable: true,
            },
            {
                field: 'memberDOB',
                title: 'Member DOB',
                width: 60,
                isFilterable: true,
            },
            {
                field: 'providerFirstName',
                title: 'Provider Name',
                width: 60,
                isFilterable: true,
                media: '(min-width: 500px)',
            },
            {
                field: 'addressLine1',
                title: 'Provider Addresse',
                width: 60,
                isFilterable: true,
                media: '(min-width: 768px)',
            },
            {
                field: 'measureName',
                title: 'Measure(s)',
                width: 60,
                isFilterable: true,
                media: '(min-width: 768px)',
            },
            {
                field: 'chaseStatus',
                title: 'Status',
                width: 60,
                isFilterable: true,
                media: '(min-width: 500px)',
            },
            {
                field: 'resolution',
                title: 'Resolution',
                width: 40,
                showTemplate: true,
                isFilterable: true,
                media: '(min-width: 768px)',
            },
            {
                field: 'note',
                title: 'Notes',
                width: 40,
                showTemplate: true,
                isFilterable: true,
                media: '(min-width: 768px)',
                type: 'button',
                button: {
                    text: 'View',
                    title: 'View',
                },
            },
            {
                field: 'Assignee',
                title: 'Assignee',
                width: 40,
                showTemplate: true,
                isFilterable: true,
                media: '(min-width: 768px)',
            },
            {
                field: 'createdOn',
                title: 'Created On',
                width: 40,
                showTemplate: true,
                isFilterable: true,
                media: '(min-width: 768px)',
            },
        ];
    }

    onInitiativeChange(value) {
        this.showSearch = value !== undefined ? true : false;

        this.visibility = value !== undefined ? 'visible' : 'hidden';
    }

    buttonClickHandler(dataItem) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.height = '300px';
        dialogConfig.width = '500px';
        dialogConfig.panelClass = 'custom-dialog-container';
        const dialogRef = this.dialog.open(ChaseViewDescriptionComponent, dialogConfig);
        dialogRef.componentInstance.note = dataItem.note;
        dialogRef.afterClosed().subscribe((result) => {});
    }

    chaseActionHandler(eventResponse: any) {
        switch (eventResponse.action) {
            case ButtonAction.Add:
                this.chaseService.selectedChaseMembers = this.selectedKeys;
                this.openDialog('qms/chases/management/action/assign');
                break;
            case ButtonAction.Edit:
                this.chaseService.selectedChaseMembers = this.selectedKeys;
                this.openDialog('qms/chases/management/action/update');
                break;
            case ButtonAction.ExportAsExcel:
                this.atlasGrid.exportAsExcel();
                break;
            case ButtonAction.ExportAsPdf:
                this.atlasGrid.exportAsPdf();
                break;
        }
    }

    openDialog(route: string) {
        this.router.navigate([route]);
    }

    onSelectionChange() {
        setTimeout(() => {
            this.chaseButtons[0].isDisabled =
                this.atlasGrid.selectedKeys.length <= 0 ? true : false;
            this.chaseButtons[1].isDisabled =
                this.atlasGrid.selectedKeys.length <= 0 ? true : false;
        }, 100);
    }

    onFindChases() {
        this.chaseService.rowId = '';
        this.atlasGrid.data = [];
        this.atlasGrid.gridDataResult = null;
        this.buildFilters();
        this.chaseService.autoLoad = true;
        this.chaseServiceChild.query(this.gridState);
    }

    buildFilters(): void {
        const formValues = this.chaseForm.value;

        this.clearFilters();

        for (const value in formValues) {
            if (!!formValues[value]) {
                if (!Array.isArray(formValues[value])) {
                    if (value === 'MemberID' || value === 'ProviderID') {
                        this.addFilter('eq', 'character', value, formValues[value]);
                    } else {
                        this.addFilter('contains', 'string', value, formValues[value]);
                    }
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

    onClickHandler(item) {
        if (item !== '' && item !== null) {
            this.openDialog('qms/chases/management/search/' + item);
        }
    }

    setMember(data) {
        if (data) {
            this.selectedMember = {
                IndvSK: data[0].IndvSK,
                Name: data[0].FirstName + ' ' + data[0].LastName,
                DOB: data[0].DOB,
            };
            this.chaseForm.controls['MemberID'].setValue(this.selectedMember.IndvSK);
            this.isMemberSelected = true;
        }
    }

    setProvider(data) {
        if (data) {
            this.selectedProvider = {
                ProvSK: data[0].ProvSK,
                Name: data[0].FirstName + ' ' + data[0].LastName,
            };
            this.chaseForm.controls['ProviderID'].setValue(this.selectedProvider.ProvSK);
            this.isProviderSelected = true;
        }
    }

    updateStatus(data) {
        this.selectedKeys.forEach((item) => {
            item.chaseStatus = data.Status;
            item.resolution = data.Resolution;
            item.note = data.Notes;
        });

        this.clearChaseGridSelection();
    }

    assignChase(data) {
        this.selectedKeys.forEach((item) => {
            item.Assignee = data.Assignee;
        });

        this.clearChaseGridSelection();
    }

    clearChaseGridSelection() {
        this.selectedKeys = [];
        this.atlasToolbar.onSelectionChanged(false);
        this.chaseService.selectedChaseMembers = [];
        this.onSelectionChange();
    }
}
