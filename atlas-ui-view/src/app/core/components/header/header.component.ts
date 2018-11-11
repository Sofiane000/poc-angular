
import { Component, Output, EventEmitter, HostBinding } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() toggleLeftNav: EventEmitter<any> = new EventEmitter<any>();
    @Output() routeChanged: EventEmitter<any> = new EventEmitter<any>();

    @HostBinding('class.mat-elevation-z6') someField = true;
    toggleNav() {
        this.toggleLeftNav.emit();
    }
    onClickRoutes() {
        this.routeChanged.emit();
    }
}
