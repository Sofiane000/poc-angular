import { Component, OnInit } from '@angular/core';
import { ICardField } from 'projects/atlas-web-components/src/public_api';

@Component({
    selector: 'atlas-card-test',
    templateUrl: './atlas-card-test.component.html',
})
export class AtlasCardTestComponent {
    primary: ICardField[] = [
        {
            label: 'Workflow',
            value: 'hello',
        },
    ];
    secondary: ICardField[] = [
        {
            label: 'Test',
            value: 'test',
        },
    ];
    cardItems: any[] = [
        {
            rowNum: 1,
            taskId: 3241,
            taskName: 'FinanceNotification#3241::Acknowledge Error Invoice',
            taskTitle: 'Acknowledge Error Invoice',
            timeStarted: '2018-11-12T15:45:08.212Z',
            dueDate: '2018-11-12T17:45:08.212Z',
            processName: 'FinanceNotification',
            taskStatus: 'I_ASSIGNED',
            performer: 'bstark',
            priority: 'medium',
        },
        {
            rowNum: 2,
            taskId: 3243,
            taskName: 'FinanceNotification#3243::Acknowledge Error Invoice',
            taskTitle: 'Acknowledge Error Invoice',
            timeStarted: '2018-11-12T21:32:15.497Z',
            dueDate: '2018-11-12T23:32:15.497Z',
            processName: 'FinanceNotification',
            taskStatus: 'I_ASSIGNED',
            performer: 'bstark',
            priority: 'medium',
        },
        {
            rowNum: 3,
            taskId: 3441,
            taskName: 'InvoiceManagement#3441::Review Invoice Charges',
            taskTitle: 'Review Invoice Charges',
            timeStarted: '2018-11-14T15:09:46.535Z',
            dueDate: '2018-12-05T19:10:53.369Z',
            processName: 'InvoiceManagement',
            taskStatus: 'I_ASSIGNED',
            performer: 'bstark',
            priority: 'medium',
        },
        {
            rowNum: 4,
            taskId: 3465,
            taskName: 'InvoiceManagement#3465::Review Invoice Charges',
            taskTitle: 'Review Invoice Charges',
            timeStarted: '2018-11-15T22:38:23.053Z',
            dueDate: '2018-12-05T18:38:23.107Z',
            processName: 'InvoiceManagement',
            taskStatus: 'I_ASSIGNED',
            performer: 'bstark',
            priority: 'medium',
        },
        {
            rowNum: 5,
            taskId: 3468,
            taskName: 'InvoiceManagement#3468::Review Invoice Charges',
            taskTitle: 'Review Invoice Charges',
            timeStarted: '2018-11-15T22:38:23.263Z',
            dueDate: '2018-12-05T18:38:23.335Z',
            processName: 'InvoiceManagement',
            taskStatus: 'I_ASSIGNED',
            performer: 'bstark',
            priority: 'medium',
        },
        {
            rowNum: 6,
            taskId: 3471,
            taskName: 'InvoiceManagement#3471::Review Invoice Charges',
            taskTitle: 'Review Invoice Charges',
            timeStarted: '2018-11-15T22:38:24.457Z',
            dueDate: '2018-12-05T18:38:24.496Z',
            processName: 'InvoiceManagement',
            taskStatus: 'I_ASSIGNED',
            performer: 'bstark',
            priority: 'medium',
        },
    ];
}
