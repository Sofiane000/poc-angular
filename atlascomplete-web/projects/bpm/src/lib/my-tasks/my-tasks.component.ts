import { Component, OnInit } from '@angular/core';
import { ButtonAction, IAtlasToolbarButton, ICardField } from '@atlas/web-components';
import { MyTasksService } from '../shared/my-tasks.service';
import { IWorkItem } from '../shared/work-item';

@Component({
    selector: 'app-my-tasks',
    templateUrl: './my-tasks.component.html',
    styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
    workItems: IWorkItem[];
    primary: ICardField[] = [];
    secondary: ICardField[] = [];
    buttons: IAtlasToolbarButton[] = [
        {
            title: 'Sort',
            action: ButtonAction.Add,
            icon: 'fa-sort-alpha-asc',
        },
        {
            title: 'Refresh',
            action: ButtonAction.Add,
            icon: 'fa-refresh',
            class: 'right-icons',
        },
        {
            title: 'Filter',
            action: ButtonAction.Add,
            icon: 'fa-filter',
            class: 'right-icons',
        },
    ];

    constructor(private myTasksService: MyTasksService) {}

    ngOnInit() {
        this.myTasksService.getWorkItems('assigned').subscribe((response) => {
            this.workItems = response;
            this.myTasksService.getFieldsForItems(this.workItems);
        });
    }

    actionHandler(eventResponse: any) {}
}
