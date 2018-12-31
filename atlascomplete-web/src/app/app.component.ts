import { Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AtlasHeaderComponent, IMenuItem } from 'atlas-web-components';
import { AppSession } from 'atlas-web-services';
import { Subscription } from 'rxjs';
import { MenuService } from './menu.service';

@Component({
    selector: 'app-atlas',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    isMiniMode: boolean;
    isSideBarOpened: boolean;
    isAuthorized: Boolean;
    isAuthorizedSubscription: Subscription;
    sideBarTitle: string;
    menuItems: IMenuItem[];
    @ViewChild('container') container: any;
    @ViewChild('header') header: AtlasHeaderComponent;

    @HostBinding('class.isAuthorized') addClass = false;

    constructor(
        private router: Router,
        private authenticationService: AppSession,
        private menuService: MenuService
    ) {
        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                if (event.url.search('sidebar') !== -1) {
                    this.isSideBarOpened = true;
                    const currentRoute = event.url
                        .split(':')[1]
                        .slice(0, event.url.split(':')[1].length - 1);
                    this.container.atlasSidebar.headerName =
                        currentRoute.search('document') !== -1 ? 'Document Viewer' : 'Tasks';
                    this.header.selectedOption =
                        this.container.atlasSidebar.headerName === 'Tasks' ? 'Tasks' : 'Document';
                } else {
                    this.isSideBarOpened = false;
                }
            }
        });
        this.isAuthorizedSubscription = this.authenticationService.isAuthorized.subscribe(
            (isAuthorized) => {
                if (isAuthorized) {
                    this.addClass = true;
                }
                this.isAuthorized = isAuthorized;
            }
        );
        this.isAuthorized = this.authenticationService.isAuthenticated();
        if (this.isAuthorized) {
            this.addClass = true;
        }
    }

    ngOnInit(): void {
        this.menuService.getMenuItems().subscribe((result) => {
            this.menuItems = result;
        });
    }

    toggleSidebar() {
        if (this.isMiniMode) {
            setTimeout(() => {
                this.isMiniMode = false;
                this.container.atlasSidebar.state = 'default';
            }, 1000);
        }
        this.container.sidebar.toggle();
    }

    setHeaderTitle(pageTitle: string) {
        this.sideBarTitle = pageTitle === 'Tasks' ? 'Tasks' : 'Document Viewer';
    }

    toggleMenu() {
        this.container.menu.toggle();
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

    headerBtnHandler(option) {
        this.setHeaderTitle(option);
        if (!this.isSideBarOpened) {
            this.toggleSidebar();
        }
        if (this.header.selectedOption === option) {
            this.header.selectedOption = '';
            this.toggleSidebar();
            this.router.navigate([{ outlets: { sidebar: null } }]);
        } else {
            this.header.selectedOption = option;
            this.router.navigate([
                { outlets: { sidebar: option === 'Tasks' ? 'tasks/mytasks' : 'document' } },
            ]);
        }
    }
}
