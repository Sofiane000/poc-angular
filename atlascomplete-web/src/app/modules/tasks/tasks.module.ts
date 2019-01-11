import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtlasCardModule, AtlasTabLayoutModule, AtlasToolbarModule } from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { SharedModule } from '../shared/shared.module';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { WorkQueueComponent } from './components/work-queue/work-queue.component';
import { MyTasksService } from './services/my-tasks.service';
import { TasksRoutingModule } from './tasks.routing.module';

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
