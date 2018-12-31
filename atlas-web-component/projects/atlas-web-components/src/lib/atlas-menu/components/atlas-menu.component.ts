import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuItem } from '../models/menu-item';
@Component({
    selector: 'atlas-menu',
    templateUrl: './atlas-menu.component.html',
    styleUrls: ['./atlas-menu.component.scss'],
})
export class AtlasMenuComponent {
    @Input() menuItems: IMenuItem[] = [];
    @Output() menuItemSelected: EventEmitter<any> = new EventEmitter<any>();

    handleMenuItemSelection($event) {
        this.menuItemSelected.emit($event);
    }
}
