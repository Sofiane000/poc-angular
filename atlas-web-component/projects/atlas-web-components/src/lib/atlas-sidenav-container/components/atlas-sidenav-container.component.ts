import {
    Component,
    Input,
    ContentChild,
    ViewChild,
    HostBinding,
    Output,
    EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AtlasSideBarComponent } from '../../atlas-sidebar/components/atlas-sidebar.component';

@Component({
    selector: 'atlas-sidenav-container',
    templateUrl: './atlas-sidenav-container.component.html',
    styleUrls: ['./atlas-sidenav-container.component.scss'],
})
export class AtlasSideNavContainerComponent {
    isHandset: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map((result) => result.matches));

    isTablet: Observable<boolean> = this.breakpointObserver
        .observe(Breakpoints.Handset)
        .pipe(map((result) => result.matches));

    IsCurHandset = false;
    IsCurTablet = false;
    @Input() isAuthorized: boolean;
    @Input() isMiniMode: boolean;
    @Output() isMiniModeChange = new EventEmitter<boolean>();
    @Input() isSideBarOpened: boolean;
    @Output() isSideBarOpenedChange = new EventEmitter<boolean>();
    @Input() sideBarTitle: boolean;
    @Input() menuItems: any[] = [];
    @ContentChild('contentTemplate')
    @ViewChild('menu')
    menu: any;
    @ViewChild('sidebar') sidebar: any;
    @ViewChild('atlasSidebar') atlasSidebar: AtlasSideBarComponent;
    @HostBinding('class.isAuthorized') @Input() addClass = false;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.isHandset.subscribe((curValIsHandset) => {
            this.IsCurHandset = curValIsHandset;
        });
        this.isTablet.subscribe((curValIsTablet) => {
            this.IsCurTablet = curValIsTablet;
        });
    }

    handleMenuItemSelection() {
        if (this.IsCurTablet || this.IsCurHandset) {
            this.toggleMenu();
        }
    }
    toggleMenu() {
        this.menu.toggle();
    }
    toggleSidebar() {}
}
