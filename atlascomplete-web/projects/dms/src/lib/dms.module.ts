import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataAccessFactory } from '@atlas/web-services';
import { DmsRoutingModule } from './dms.routing.module';
@NgModule({
    imports: [CommonModule,DmsRoutingModule]
})
export class DmsModule {
}
