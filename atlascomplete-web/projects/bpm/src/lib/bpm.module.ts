import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtlasCardModule, AtlasTabLayoutModule, AtlasToolbarModule } from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { BpmRoutingModule } from './bpm.routing.module';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyTasksService } from './shared/my-tasks.service';
import { TasksComponent } from './tasks/tasks.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
@NgModule({
    declarations: [TasksComponent, MyTasksComponent, WorkQueueComponent],
    imports: [
        CommonModule,
        BpmRoutingModule,
        SharedModule,
        AtlasTabLayoutModule,
        AtlasCardModule,
        AtlasToolbarModule,
    ],
    providers: [MyTasksService],
})
export class BpmModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('bpm.workitems')
            .module('bpm')
            .url('workitems');
    }
}
