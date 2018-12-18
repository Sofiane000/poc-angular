import { Component, OnInit } from '@angular/core';
import { IColumnSetting } from 'atlas-web-components';
import { UserService } from '../../../users/services/user.service';
import { DocumentViewerService } from 'src/app/modules/doc-viewer/services/doc-viewer.service';

@Component({
    selector: 'app-button-example',
    templateUrl: './button-example.component.html',
    styleUrls: ['./button-example.component.scss'],
    providers: [UserService, DocumentViewerService],
})
export class ButtonExampleComponent implements OnInit {
    events: string[] = [];
    columnsData: IColumnSetting[];
    gridState: any;
    isPageable = false;
    isSortable = false;
    isFilterable = false;
    colorChange: boolean;
    selectableSettings: any = {
        enabled: false,
        mode: 'single',
        checkboxOnly: false,
    };
    isEditable: boolean;
    selectedKeys: any[] = [];
    selectBy = 'cf_LoginID';

    constructor(
        public service: UserService,
        private docViewer: DocumentViewerService
    ) {}

    ngOnInit() {
        this.gridState = {
            skip: 0,
            take: 5,
            filter: {
                logic: 'and',
                filters: [
                    { field: 'firstName', operator: 'contains', value: '' },
                ],
            },
        };
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
                width: 40,
            },
            {
                field: 'cf_LoginID',
                title: 'Username',
                width: 40,
            },
            {
                field: 'cf_TenantTaxnmyName',
                title: 'Tenants',
                width: 100,
            },
            {
                field: 'UserActvtnInd',
                title: 'Active',
                width: 30,
                showTemplate: true,
            },
        ];
    }

    changeHeaderColor(toggle: boolean) {
        if (toggle) {
            this.colorChange = true;
            this.columnsData.map((column) => {
                column.headerStyle = { 'background-color': 'rgb(75, 92, 189)' };
            });
        } else {
            this.colorChange = false;

            this.columnsData.map((column) => {
                column.headerStyle = {};
            });
        }
    }

    openAlert() {
        alert('Button clicked');
    }

    onBlurFocus(value) {
        this.log(value);
    }

    onRemoveClick(): void {
        this.events = [];
    }

    showDocument(documentId) {
        this.docViewer.showDocument(documentId);
    }

    private log(event: string, arg?: any): void {
        this.events.push(`${event}`);
    }
}
