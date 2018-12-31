import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { WorkQueueComponent } from './components/work-queue/work-queue.component';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
const appRoutes: Routes = [
    {
        path: '', component: TasksComponent, children: [
            {
                path: 'mytasks', component: MyTasksComponent
            },
            {
                path: 'workqueue', component: WorkQueueComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
