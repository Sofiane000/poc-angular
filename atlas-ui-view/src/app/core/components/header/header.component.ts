
import { Component, Output, EventEmitter, HostBinding, Input } from '@angular/core';
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
        } else {
            this.selectedOption = option;
        }
    }
}
