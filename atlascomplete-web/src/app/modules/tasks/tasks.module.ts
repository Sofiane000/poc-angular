import { NgModule } from '@angular/core';
import { TasksComponent } from './components/tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks.routing.module';
import { SharedModule } from '../shared/shared.module';
import { AtlasTabLayoutModule, AtlasCardModule, AtlasToolbarModule } from 'atlas-web-components';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { WorkQueueComponent } from './components/work-queue/work-queue.component';
import { DataAccessFactory } from 'atlas-web-services';
import { MyTasksService } from './services/my-tasks.service';

@NgModule({
    declarations: [TasksComponent, MyTasksComponent, WorkQueueComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule,
        AtlasTabLayoutModule,
        AtlasCardModule,
        AtlasToolbarModule,
    ],
    providers: [MyTasksService],
})
export class TasksModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('bpm.workitems')
            .module('bpm')
            .url('workitems');
    }
}
