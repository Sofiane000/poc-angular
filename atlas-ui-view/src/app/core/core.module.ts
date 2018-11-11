import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './components/core.component';
import { CoreRoutingModule } from './core.routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [CoreComponent, HeaderComponent, LeftNavComponent, RightSideBarComponent],
  exports: [
    RouterModule,
    CoreComponent,
    HeaderComponent,
    LeftNavComponent,
    RightSideBarComponent
  ],
  providers: [
  ]
})
export class CoreModule { }
