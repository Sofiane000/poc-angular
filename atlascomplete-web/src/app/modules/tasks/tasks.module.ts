import { NgModule } from '@angular/core';
import { TasksComponent } from './components/tasks.component';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [TasksComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        SharedModule
    ],
    providers: [
    ]
})
export class TasksModule { }
