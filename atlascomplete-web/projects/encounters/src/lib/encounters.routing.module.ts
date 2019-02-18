import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [];
// @dynamic
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
})
export class EncountersRoutingModule {}
