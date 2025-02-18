import { Component, OnInit } from '@angular/core';
import { ButtonAction, IAtlasToolbarButton } from '@atlas/web-components';
import { MyTasksService } from '../shared/my-tasks.service';
import { IWorkItem } from '../shared/work-item';

@Component({
    selector: 'app-work-queue',
    templateUrl: './work-queue.component.html',
    styleUrls: ['./work-queue.component.scss'],
})
export class WorkQueueComponent implements OnInit {
    workItems: IWorkItem[];
    buttons: IAtlasToolbarButton[] = [
        {
            title: 'Sort',
            action: ButtonAction.Sort,
            icon: 'fa-sort-alpha-asc',
        },
        {
            title: 'Refresh',
            action: ButtonAction.Refresh,
            icon: 'fa-refresh',
            class: 'right-icons',
        },
        {
            title: 'Filter',
            action: ButtonAction.Filter,
            icon: 'fa-filter',
            class: 'right-icons',
        },
    ];

    constructor(private workQueueService: MyTasksService) {}

    ngOnInit() {
        this.workQueueService.getWorkItems('available').subscribe((response) => {
            this.workItems = response;
            this.workQueueService.getFieldsForItems(this.workItems);
        });
    }

    actionHandler(eventResponse: any) {}
}
