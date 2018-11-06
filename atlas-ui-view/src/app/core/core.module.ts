import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav.component';
import { CoreRoutingModule } from './core.routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [NavComponent],
  exports: [
    RouterModule,
    NavComponent
  ],
  providers: [
  ]
})
export class CoreModule { }
