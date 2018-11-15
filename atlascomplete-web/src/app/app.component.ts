import { Component, HostBinding, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './modules/auth/services/authentication.service';
import { IMenuItem } from 'atlas-ui-angular';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-atlas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isSideBarOpened: boolean;
  isAuthorized: boolean;
  isAuthorizedSubscription: Subscription;
  menuItems: IMenuItem[];
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  @ViewChild('menu') menu: any;
  @ViewChild('sidebar') sidebar: any;
  @HostBinding('class.isAuthorized') addClass = false;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
    private authenticationService: AuthenticationService, private menuService: MenuService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.search('sidebar')) {
          // this.isSideBarOpened = true;
        }
      }
    });
    this.isAuthorizedSubscription = this.authenticationService.isAuthorized.subscribe(isAuthorized => {
      if (isAuthorized) {
        this.addClass = true;
      }
      this.isAuthorized = isAuthorized;
    });
    this.isAuthorized = this.authenticationService.isAuthenticated();
    if (this.isAuthorized) {
      this.addClass = true;
    }
  }
  ngOnInit(): void {

    this.menuItems = this.menuService.getMenuItems();
  }
  toggleSidebar() {
    this.sidebar.toggle();
  }
  toggleMenu() {
    this.menu.toggle();
  }
  ngOnDestroy(): void {
    this.isAuthorizedSubscription.unsubscribe();
  }

}