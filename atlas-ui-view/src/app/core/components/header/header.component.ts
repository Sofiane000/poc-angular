
import { Component, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() isSideBarOpened: boolean;
    selectedOption: string;
    @Output() toggleMenu: EventEmitter<any> = new EventEmitter<any>();
    @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();

    @HostBinding('class.mat-elevation-z6') someField = true;
    constructor(private router: Router) {

    }
    toggleNav() {
        this.toggleMenu.emit();
    }
    onClickRoutes(option: string) {
        if (!this.isSideBarOpened) {
            this.toggleSideBar.emit();
        }
        if (this.selectedOption === option) {
            this.selectedOption = '';
            this.toggleSideBar.emit();
            this.router.navigate([{ outlets: { sidebar: null } }]);

        } else {
            this.selectedOption = option;
            this.router.navigate([{ outlets: { sidebar: option } }]);
        }
    }
}
