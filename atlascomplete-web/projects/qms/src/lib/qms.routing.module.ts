import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChasesModule } from './chases/chases.module';
const appRoutes: Routes = [{
    path: 'chases',
    loadChildren: () => ChasesModule
}];
// @dynamic
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class QmsRoutingModule {}
