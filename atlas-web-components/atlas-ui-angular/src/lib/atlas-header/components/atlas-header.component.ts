
import { Component, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'atlas-header',
    templateUrl: './atlas-header.component.html',
    styleUrls: ['./atlas-header.component.css']
})
export class AtlasHeaderComponent {
    selectedTitle: string;
    @Input() isSideBarOpened: boolean;
    selectedOption: string;
    @Output() toggleMenu: EventEmitter<any> = new EventEmitter<any>();
    @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();
    @Output() setHeaderTitle: EventEmitter<any> = new EventEmitter<any>();

    @HostBinding('class.mat-elevation-z6') someField = true;
    constructor(private router: Router) {

    }
    toggleNav() {
        this.toggleMenu.emit();
    }
    onClickRoutes(option: string) {
        this.selectedTitle = option;
        this.setHeaderTitle.emit();
        if (!this.isSideBarOpened) {
            this.toggleSideBar.emit();
        }
        if (this.selectedOption === option.toLowerCase()) {
            this.selectedOption = '';
            this.toggleSideBar.emit();
            this.router.navigate([{ outlets: { sidebar: null } }]);

        } else {
            this.selectedOption = option.toLowerCase();
            this.router.navigate([{ outlets: { sidebar: option.toLowerCase() } }]);
        }
    }
}
