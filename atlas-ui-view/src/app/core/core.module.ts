import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core.routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { LoginGuardService } from './services/login-guard.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    SharedModule
  ],
  declarations: [HeaderComponent, MenuComponent, SideBarComponent,
    ContentComponent, MenuItemComponent, LoginComponent, HomeComponent],
  exports: [
    RouterModule,
    HeaderComponent,
    MenuComponent,
    SideBarComponent,
    ContentComponent,
    MenuItemComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    LoginGuardService
  ]
})
export class CoreModule { }
