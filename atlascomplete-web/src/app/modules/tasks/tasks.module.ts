import { NgModule } from '@angular/core';
import { TasksComponent } from './components/tasks/tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks.routing.module';
import { SharedModule } from '../shared/shared.module';
import { AtlasTabLayoutModule } from 'atlas-ui-angular';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { WorkQueueComponent } from './components/work-queue/work-queue.component';

@NgModule({
    declarations: [TasksComponent, MyTasksComponent, WorkQueueComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule,
        AtlasTabLayoutModule
    ],
    providers: [
    ]
})
export class TasksModule { }
