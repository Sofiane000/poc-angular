import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
const appRoutes: Routes = [
    {
        path: '',
        component: TasksComponent,
        children: [
            {
                path: 'mytasks',
                component: MyTasksComponent,
            },
            {
                path: 'workqueue',
                component: WorkQueueComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class BpmRoutingModule {}
