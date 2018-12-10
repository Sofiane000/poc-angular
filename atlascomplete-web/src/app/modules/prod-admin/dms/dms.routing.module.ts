import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmsGridComponent } from './components/dms-grid/dms-grid.component';
import { DmsDetailComponent } from './components/dms-detail/dms-detail.component';
import { CanDeactivateGuard } from 'atlas-web-services';

const appRoutes: Routes = [
    {
        path: '',
        component: DmsGridComponent,
        children: [],
    },
    {
        path: ':id',
        component: DmsDetailComponent,
        children: [],
    },
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class DmsRoutingModule {}
