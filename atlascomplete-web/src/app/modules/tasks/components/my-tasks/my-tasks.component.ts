import { Component, OnInit } from '@angular/core';
import { MyTasksService } from '../../services/my-tasks.service';
import { IWorkItem } from '../../models/work-item';
import { ICardField } from 'atlas-web-components';

@Component({
    selector: 'app-my-tasks',
    templateUrl: './my-tasks.component.html',
    styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
    workItems: IWorkItem[];
    statusValues: string[] = [
        'Default View',
        'Task Title',
        'Workflow',
        'Due',
        'Assigned To',
        'Created',
        'Time Remaining',
        'Priority',
    ];
    selectedStatus = 'Default View';
    primary: ICardField[] = [];
    secondary: ICardField[] = [];

    constructor(private myTasksService: MyTasksService) {}

    ngOnInit() {
        this.myTasksService.getWorkItems('assigned').subscribe((response) => {
            this.workItems = response;
            console.log(this.workItems);
            this.myTasksService.getFieldsForItems(this.workItems);
        });
    }
}
