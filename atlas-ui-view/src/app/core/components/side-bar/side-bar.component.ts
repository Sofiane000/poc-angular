
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
    @Output() toggleSideBar: EventEmitter<any> = new EventEmitter<any>();
    isOpened: boolean;
    toggle() {
        this.toggleSideBar.emit();
    }
    onActivate(event) {
        console.log(event);
    }
}
