import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridExampleComponent } from './components/grid-example.component';
import { DetailComponent } from './components/detail.component';

const appRoutes: Routes = [
  { path: '', component: GridExampleComponent },
  { path: ':id/details', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
