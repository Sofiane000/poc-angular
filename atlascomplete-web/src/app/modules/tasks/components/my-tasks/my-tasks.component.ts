import { Component, OnInit } from '@angular/core';
import { MyTasksService } from '../../services/my-tasks.service';
import { IWorkItem } from '../../models/work-item';
import { ICardField, ButtonAction, AtlasToolbarButton } from 'atlas-web-components';

@Component({
    selector: 'app-my-tasks',
    templateUrl: './my-tasks.component.html',
    styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
    workItems: IWorkItem[];
    primary: ICardField[] = [];
    secondary: ICardField[] = [];
    buttons: AtlasToolbarButton[] = [
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
