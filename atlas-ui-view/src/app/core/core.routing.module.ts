import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
  { path: 'grid', loadChildren: '../grid/grid.module#GridModule' },
  { path: 'button', loadChildren: '../button/button.module#ButtonModule' },
  { path: 'tree', loadChildren: '../tree/tree.module#TreeModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
