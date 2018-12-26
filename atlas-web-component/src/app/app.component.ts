import { Component, ViewChild, OnInit } from '@angular/core';
import { AtlasSideBarComponent } from 'projects/atlas-web-components/src/public_api';

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
    @ViewChild('menu') menu: any;
    @ViewChild('sidebar') sidebar: any;
    @ViewChild('atlasSidebar') atlasSidebar: AtlasSideBarComponent;
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
        ];
    }
    toggleMenu() {
        this.menu.toggle();
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
    headerBtnHandler(option) {
        this.toggleSidebar();
    }
}
