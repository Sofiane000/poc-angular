import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { AtlasSideNavContainerComponent } from 'projects/atlas-web-components/src/lib/atlas-sidenav-container/components/atlas-sidenav-container.component';
@Component({
    selector: 'atlas-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    selectedPage = 'Grid';
    pages: string[] = ['Grid'];
    menuItems: any[];
    isSideBarOpened = false;
    isMiniMode: boolean;
    isAuthorized = true;
    @ViewChild('container') container: AtlasSideNavContainerComponent;
    @HostBinding('class.isAuthorized') addClass = true;

    ngOnInit(): void {
        this.menuItems = [
            {
                MenuName: 'Atlas Grid',
                MenuURI: 'atlasgrid',
            },
            {
                MenuName: 'Atlas Tree',
                MenuURI: 'atlastree',
            },
            {
                MenuName: 'Atlas Input',
                MenuURI: 'atlasinput',
            },
            {
                MenuName: 'Atlas Button',
                MenuURI: 'atlasbutton',
            },
            {
                MenuName: 'Atlas Toolbar',
                MenuURI: 'atlastoolbar',
            },
            {
                MenuName: 'Atlas Card',
                MenuURI: 'atlascard',
            },
            {
                MenuName: 'Atlas MultiSelect',
                MenuURI: 'atlasmultiselect',
            },
        ];
    }

    toggleMenu() {
        this.container.menu.toggle();
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

    headerBtnHandler(option) {
        this.toggleSidebar();
    }
}
