import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
    AtlasGridComponent,
    ButtonAction,
    IAtlasToolbarButton,
    IColumnSetting,
} from '@atlas/web-components';
import { ChaseService } from '../shared/chase.service';

@Component({
    selector: 'lib-chase-management',
    templateUrl: './chase-management.component.html',
    styleUrls: ['./chase-management.component.scss'],
})
export class ChaseManagementComponent implements OnInit {
    filters: any[] = [];
    chaseForm: FormGroup = new FormGroup({
        Initiative: new FormControl([], Validators.required),
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
    initiatives: any[] = ['Initiative 1', 'Initiative 2', 'Initiative 3', 'Initiative 4'];
    assignees: any[] = ['Assignee 1', 'Assignee 2', 'Assignee 3', 'Assignee 4'];
    selectedKeys: any[] = [];
    selectBy = 'key';
    @ViewChild(AtlasGridComponent)
    public atlasGrid: AtlasGridComponent;
    showSearch = false;
    isMemberFound = true;
    selectedMember: any;
    isMemberSelected = false;

    constructor(private router: Router, private chaseService: ChaseService) {
        this.chaseService.getSaveSubject().subscribe((response) => {
            this.setMember(response.data);
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
            },
            {
                field: 'assigneeFirstName',
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

    actionHandler() {}

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
        const filters = this.getFilters();

        console.log(filters);

        if (this.chaseServiceChild) {
            this.atlasGrid.ngOnInit();
        }

        this.clearFilters();
    }

    getFilters() {
        const formValues = this.chaseForm.value;

        for (const value in formValues) {
            if (formValues[value] !== '') {
                if (!Array.isArray(formValues[value])) {
                    this.addFilter('begins', 'character', value, formValues[value]);
                } else if (formValues[value].length > 0) {
                    this.addFilter('begins', 'character', value, formValues[value][0]);
                }
            }
        }

        return this.filters;
    }

    addFilter(operator: string, dataType: string, property: string, value: any) {
        this.filters.push({
            "operator": operator,
            "dataType": dataType,
            "property": property,
            "value": value
        });
    }

    clearFilters() {
        this.filters = [];
    }

    onInitiativesChanged(selection) {
        if (selection !== null && selection.length > 0) {
            if (!this.chaseServiceChild) {
                this.chaseServiceChild = this.chaseService;
            }
            this.showSearch = true;
            this.initiativeWidth = '50%';
        } else {
            this.showSearch = false;
            this.initiativeWidth = '25%';
        }
    }

    onClickHandler(item) {
        if (item !== '' && item !== null) {
            this.openDialog('qms/chases/management/search/' + item);
        }
    }

    onMemberSelect() {
        this.isMemberFound = false;
    }

    setMember(data) {
        if (data) {
            this.chaseForm.controls['MemberID'].setValue(data[0].IndvSK);
            this.isMemberSelected = true;
            this.selectedMember = {
                Name: data[0].FirstName + ' ' + data[0].LastName,
                DOB: data[0].DOB,
            };
        }
    }

    updateStatus(data) {
        console.log(data);
        this.selectedKeys.forEach((item) => {
            item.chaseStatus = data.Status[0];
            item.resolution = data.Resolution[0];
            item.note = data.Notes;
        });

        this.selectedKeys = [];
        this.chaseService.selectedChaseMembers = [];
        // this.atlasGrid.refreshGrid();
    }

    assignChase(data) {
        console.log(data);
        this.selectedKeys.forEach((item) => {
            item.assigneeFirstName = data.Assignee[0];
        });

        this.selectedKeys = [];
        this.chaseService.selectedChaseMembers = [];
        this.atlasGrid.refreshGrid();
    }
}
