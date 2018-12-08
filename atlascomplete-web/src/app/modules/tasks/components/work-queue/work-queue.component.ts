import { Component, OnInit } from '@angular/core';
import { MyTasksService } from '../../services/my-tasks.service';
import { IWorkItem } from '../../models/work-item';

@Component({
    selector: 'app-work-queue',
    templateUrl: './work-queue.component.html',
    styleUrls: ['./work-queue.component.scss'],
})
export class WorkQueueComponent implements OnInit {
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
    constructor(private workQueueService: MyTasksService) {}

    ngOnInit() {
        this.workQueueService.getWorkItems('available').subscribe((response) => {
            this.workItems = response;
        });
    }
}
