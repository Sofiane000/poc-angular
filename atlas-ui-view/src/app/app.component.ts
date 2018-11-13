import { Component, HostBinding, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './modules/auth/services/authentication.service';
import { IMenuItem } from 'atlas-ui-angular';

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
    private authenticationService: AuthenticationService) {
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

    this.menuItems = [{
      'MenuSK': 3,
      'ParentMenuSK': 0,
      'MenuName': 'Administration',
      'MenuType': 'LeftNav',
      'MenuURI': '/',
      'MenuSortOrder': 4,
      'CreatedBy': 'Sys',
      'CreatedTs': '2018-04-20T17:25:06.446-04:00',
      'LastModfdBy': 'gadmin',
      'LastModfdTs': '2018-10-05T11:37:30.826-04:00',
      'RecStat': 'A',
      'cf_CmpntSK': 63,
      'daTableRowId': 'AAAAAAAJAIE=',
      'ttMenu': [
        {
          'MenuSK': 58,
          'ParentMenuSK': 3,
          'MenuName': 'Components',
          'MenuType': 'LeftNav',
          'MenuURI': 'administration/components',
          'MenuSortOrder': 1,
          'CreatedBy': 'bStark',
          'CreatedTs': '2018-04-20T17:25:06.447-04:00',
          'LastModfdBy': 'gadmin',
          'LastModfdTs': '2018-11-05T15:57:28.581-05:00',
          'RecStat': 'A',
          'cf_CmpntSK': 66,
          'daTableRowId': 'AAAAAAAJAII='
        },
        {
          'MenuSK': 59,
          'ParentMenuSK': 3,
          'MenuName': 'Reference Data',
          'MenuType': 'LeftNav',
          'MenuURI': '',
          'MenuSortOrder': 0,
          'CreatedBy': 'bStark',
          'CreatedTs': '2018-04-20T17:25:06.448-04:00',
          'LastModfdBy': 'e4995',
          'LastModfdTs': '2017-12-05T17:44:49.020-05:00',
          'RecStat': 'A',
          'cf_CmpntSK': 67,
          'daTableRowId': 'AAAAAAAJAIM='
        },
        {
          'MenuSK': 60,
          'ParentMenuSK': 3,
          'MenuName': 'Menus',
          'MenuType': 'LeftNav',
          'MenuURI': '',
          'MenuSortOrder': 0,
          'CreatedBy': 'bStark',
          'CreatedTs': '2018-04-20T17:25:06.448-04:00',
          'LastModfdBy': 'e4995',
          'LastModfdTs': '2017-12-05T17:44:49.022-05:00',
          'RecStat': 'A',
          'cf_CmpntSK': 68,
          'daTableRowId': 'AAAAAAAJAIQ='
        },
        {
          'MenuSK': 61,
          'ParentMenuSK': 3,
          'MenuName': 'Services',
          'MenuType': 'LeftNav',
          'MenuURI': '',
          'MenuSortOrder': 0,
          'CreatedBy': 'bStark',
          'CreatedTs': '2018-04-20T17:25:06.448-04:00',
          'LastModfdBy': 'e4995',
          'LastModfdTs': '2017-12-05T17:44:49.025-05:00',
          'RecStat': 'A',
          'cf_CmpntSK': 69,
          'daTableRowId': 'AAAAAAAJAIU='
        },
        {
          'MenuSK': 62,
          'ParentMenuSK': 3,
          'MenuName': 'Tenants',
          'MenuType': 'LeftNav',
          'MenuURI': 'administration/tenants',
          'MenuSortOrder': 0,
          'CreatedBy': 'bStark',
          'CreatedTs': '2018-04-20T17:25:06.449-04:00',
          'LastModfdBy': 'e4995',
          'LastModfdTs': '2017-12-05T17:44:49.027-05:00',
          'RecStat': 'A',
          'cf_CmpntSK': 426,
          'daTableRowId': 'AAAAAAAJAIY='
        },
        {
          'MenuSK': 63,
          'ParentMenuSK': 3,
          'MenuName': 'Users',
          'MenuType': 'LeftNav',
          'MenuURI': 'administration/users',
          'MenuSortOrder': 0,
          'CreatedBy': 'bStark',
          'CreatedTs': '2018-04-20T17:25:06.449-04:00',
          'LastModfdBy': 'gadmin',
          'LastModfdTs': '2018-08-31T08:22:25.437-04:00',
          'RecStat': 'A',
          'cf_CmpntSK': 71,
          'daTableRowId': 'AAAAAAAJAIc='
        },
        {
          'MenuSK': 131,
          'ParentMenuSK': 3,
          'MenuName': 'DMS Configuration',
          'MenuType': 'LeftNav',
          'MenuURI': '',
          'MenuSortOrder': 0,
          'CreatedBy': 'bstark',
          'CreatedTs': '2018-05-01T11:07:41.368-04:00',
          'LastModfdBy': 'bstark',
          'LastModfdTs': '2018-05-01T11:07:41.368-04:00',
          'RecStat': 'A',
          'cf_CmpntSK': 424,
          'daTableRowId': 'AAAAAAAJAIo='
        },
        {
          'MenuSK': 136,
          'ParentMenuSK': 3,
          'MenuName': 'Scheduler',
          'MenuType': 'LeftNav',
          'MenuURI': '',
          'MenuSortOrder': 0,
          'CreatedBy': 'bstark',
          'CreatedTs': '2018-06-15T11:35:31.602-04:00',
          'LastModfdBy': 'bstark',
          'LastModfdTs': '2018-06-15T11:35:31.602-04:00',
          'RecStat': 'A',
          'cf_CmpntSK': 478,
          'daTableRowId': 'AAAAAAAJAIs='
        }
      ]
    },
    {
      'MenuSK': 67,
      'ParentMenuSK': 0,
      'MenuName': 'Finance Services',
      'MenuType': 'LeftNav',
      'MenuURI': '',
      'MenuSortOrder': 3,
      'CreatedBy': 'Sys',
      'CreatedTs': '2018-04-20T17:25:06.450-04:00',
      'LastModfdBy': 'gadmin',
      'LastModfdTs': '2018-11-02T10:25:21.029-04:00',
      'RecStat': 'A',
      'cf_CmpntSK': 369,
      'daTableRowId': 'AAAAAAAJAIg=',
      'ttMenu': [
        {
          'MenuSK': 83,
          'ParentMenuSK': 67,
          'MenuName': 'Invoice Schedule Configuration',
          'MenuType': 'LeftNav',
          'MenuURI': '',
          'MenuSortOrder': 1,
          'CreatedBy': 'bstark',
          'CreatedTs': '2018-02-16T10:57:38.669-05:00',
          'LastModfdBy': 'bstark',
          'LastModfdTs': '2018-02-16T10:57:38.669-05:00',
          'RecStat': 'A',
          'cf_CmpntSK': 370,
          'daTableRowId': 'AAAAAAAJAIk='
        }
      ]
    },
    {
      'MenuSK': 144,
      'ParentMenuSK': 0,
      'MenuName': 'Members',
      'MenuType': 'Grid Menu',
      'MenuURI': '',
      'MenuSortOrder': 4,
      'CreatedBy': 'bstark',
      'CreatedTs': '2018-07-24T17:15:01.181-04:00',
      'LastModfdBy': 'gadmin',
      'LastModfdTs': '2018-11-02T10:25:18.395-04:00',
      'RecStat': 'A',
      'cf_CmpntSK': 428,
      'daTableRowId': 'AAAAAAAJAI0='
    }];
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
