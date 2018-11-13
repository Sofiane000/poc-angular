import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonExampleComponent } from './components/button-example/button-example.component';

const appRoutes: Routes = [
  { path: '', component: ButtonExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
