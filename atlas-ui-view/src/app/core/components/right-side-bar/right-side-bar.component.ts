
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-right-side-bar',
    templateUrl: './right-side-bar.component.html',
    styleUrls: ['./right-side-bar.component.css']
})
export class RightSideBarComponent {
    @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();
    isOpened: boolean;
    toggle() {
        this.toggleSideBar.emit();
    }
    onActivate(event) {
        console.log(event);
    }
}
