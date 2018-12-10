import { Component, Output, OnInit, EventEmitter, HostBinding, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { IMenuItem } from '../models/menu-item';
@Component({
    selector: 'atlas-menu-item',
    templateUrl: './atlas-menu-item.component.html',
    styleUrls: ['./atlas-menu-item.component.scss'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
        ]),
    ],
})
export class AtlasMenuItemComponent implements OnInit {
    expanded = true;
    @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
    @Input() item: IMenuItem;
    @Input() depth: number;
    @Output() menuItemSelected: EventEmitter<IMenuItem> = new EventEmitter<IMenuItem>();

    constructor(public router: Router) {
        if (this.depth === undefined) {
            this.depth = 0;
        }
    }
    ngOnInit(): void {}
    onItemSelected(item: IMenuItem) {
        if ((!item.ttMenu || !item.ttMenu.length) && item.MenuURI) {
            this.router.navigate([item.MenuURI]);
        }
        if (item.ttMenu && item.ttMenu.length) {
            this.expanded = !this.expanded;
        }
        this.triggerItemSelected(item);
    }

    triggerItemSelected(item: IMenuItem) {
        this.menuItemSelected.emit(item);
    }

    getIconClass(type: string) {
        let iconName = '';
        switch (type) {
            case 'Administration':
                iconName = 'fa-globe';
                break;
            case 'Finance Services':
                iconName = 'fa-money';
                break;
            case 'Members':
                iconName = 'fa-user';
                break;
            default:
                iconName = 'fa-file';
        }
        return iconName;
    }
}
