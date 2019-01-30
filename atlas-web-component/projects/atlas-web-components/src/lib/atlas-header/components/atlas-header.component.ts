import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
@Component({
    selector: 'atlas-header',
    templateUrl: './atlas-header.component.html',
    styleUrls: ['./atlas-header.component.scss'],
})
export class AtlasHeaderComponent {
    @Input() isSideBarOpened: boolean;
    @Input() showButtons = true;
    @Input() showSidebarToggle = false;
    selectedOption: string;
    @Output() toggleMenu: EventEmitter<any> = new EventEmitter<any>();
    @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();
    @Output() setHeaderTitle: EventEmitter<any> = new EventEmitter<any>();
    @Output() logout: EventEmitter<any> = new EventEmitter<any>();
    @Output() headerBtnClicked: EventEmitter<any> = new EventEmitter<any>();
    @HostBinding('class.mat-elevation-z6') someField = true;

    constructor() {}

    toggleNav() {
        this.toggleMenu.emit();
    }

    onClickRoutes(option: string) {
        this.headerBtnClicked.emit(option);
    }

    onLogout() {
        this.logout.emit();
    }
}
