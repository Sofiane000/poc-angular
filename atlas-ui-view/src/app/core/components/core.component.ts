import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {
  isSideBarOpened: boolean;
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.search('sidebar')) {
          this.isSideBarOpened = true;
        }
      }
    });
  }
  routeHandler() {
    this.isSideBarOpened = !this.isSideBarOpened;
  }
}
