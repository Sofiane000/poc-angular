import { Component, OnInit } from '@angular/core';
import { INavLink } from 'atlas-web-components/lib/layout/atlas-tab-layout/models/nav-link';
@Component({
    selector: 'app-tasks',
    templateUrl: 'tasks.component.html',
    styleUrls: ['tasks.component.scss'],
})
export class TasksComponent implements OnInit {
    navLinks: INavLink[];
    ngOnInit() {
        this.navLinks = [
            {
                label: 'My Tasks',
                link: 'mytasks',
                index: 0
            },
            {
                label: 'Work Queue',
                link: 'workqueue',
                index: 1
            }
        ];
    }
}
