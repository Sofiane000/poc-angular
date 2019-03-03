import { Component, OnInit, ViewChild } from '@angular/core';
import { AtlasGridComponent } from 'projects/atlas-web-components/src/lib/atlas-grid/components/atlas-grid.component';
import { IColumnSetting } from 'projects/atlas-web-components/src/lib/atlas-grid/models/grid-column-setting';
import { TestService } from 'projects/atlas-web-components/src/lib/atlas-grid/services/test-grid.service';

@Component({
    selector: 'atlas-grid-test',
    templateUrl: './atlas-grid-test.component.html',
    styleUrls: ['./atlas-grid-test.component.scss'],
})
export class AtlasGridTestComponent implements OnInit {
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
        checkboxOnly: true,
    };
    sortable: any = {
        allowUnsort: true,
        mode: 'multiple',
    };
    columnsData: IColumnSetting[];

    testServiceChild: TestService;
    selectedKeys: any[] = [];
    selectBy = 'cf_LoginID';
    @ViewChild(AtlasGridComponent)
    public atlasGrid: AtlasGridComponent;

    constructor(private testService: TestService) {
        this.testServiceChild = testService;
    }

    ngOnInit() {
        this.columnsData = [
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
                hidden: true,
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
                type: 'button',
                media: '(min-width: 768px)',
                button: {
                    text: 'View',
                    title: 'View',
                },
            },
        ];
    }

    onSelectionChange() {}
}
