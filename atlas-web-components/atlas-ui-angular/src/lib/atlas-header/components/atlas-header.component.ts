
import { Component, Output, EventEmitter, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'atlas-header',
    templateUrl: './atlas-header.component.html',
    styleUrls: ['./atlas-header.component.css']
})
export class AtlasHeaderComponent {
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
