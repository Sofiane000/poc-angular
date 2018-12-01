import { Component, HostBinding, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './modules/auth/services/authentication.service';
import { IMenuItem, AtlasSideBarComponent, AtlasHeaderComponent } from 'atlas-ui-angular';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-atlas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isMiniMode: boolean;
  isSideBarOpened: boolean;
  isAuthorized: boolean;
  isAuthorizedSubscription: Subscription;
  sideBarTitle: string;
  menuItems: IMenuItem[];
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  @ViewChild('menu') menu: any;
  @ViewChild('sidebar') sidebar: any;
  @ViewChild('atlasSidebar') atlasSidebar: AtlasSideBarComponent;
  @ViewChild('header') header: AtlasHeaderComponent;

  @HostBinding('class.isAuthorized') addClass = false;
  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
    private authenticationService: AuthenticationService, private menuService: MenuService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.search('sidebar') !== -1) {
          this.isSideBarOpened = true;
          const currentRoute = event.url.split(':')[1].slice(0, event.url.split(':')[1].length - 1);
          this.atlasSidebar.headerName = currentRoute === 'document' ? 'Document Viewer' : 'Tasks';
          this.header.selectedOption = currentRoute;
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
    if (this.isMiniMode) {
      setTimeout(() => {
        this.isMiniMode = false;
        this.atlasSidebar.state = 'default';
      }, 1000);
    }
    this.sidebar.toggle();
  }
  setHeaderTitle() {
    this.sideBarTitle = this.header.selectedTitle === 'Document' ? 'Document Viewer' : this.header.selectedTitle;
  }
  toggleMenu() {
    this.menu.toggle();
  }
  ngOnDestroy(): void {
    this.isAuthorizedSubscription.unsubscribe();
  }
  logoutHandler() {
    this.authenticationService.isAuthorized.next(false);
    this.addClass = false;
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
