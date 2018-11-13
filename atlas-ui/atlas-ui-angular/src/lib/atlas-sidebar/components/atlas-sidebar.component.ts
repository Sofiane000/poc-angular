
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'atlas-sidebar',
    templateUrl: './atlas-sidebar.component.html',
    styleUrls: ['./atlas-sidebar.component.css']
})
export class AtlasSideBarComponent {
    @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();
    isOpened: boolean;
    toggle() {
        this.toggleSideBar.emit();
    }
}
