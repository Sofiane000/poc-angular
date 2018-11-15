
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { IMenuItem } from '../models/menu-item';
@Component({
    selector: 'atlas-menu-item',
    templateUrl: './atlas-menu-item.component.html',
    styleUrls: ['./atlas-menu-item.component.css'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
            ),
        ])
    ]
})
export class AtlasMenuItemComponent implements OnInit {

    expanded = true;
    @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
    @Input() item: IMenuItem;
    @Input() depth: number;

    constructor(public router: Router) {
        if (this.depth === undefined) {
            this.depth = 0;
        }
    }
    ngOnInit(): void {
    }
    onItemSelected(item: IMenuItem) {
        if ((!item.ttMenu || !item.ttMenu.length) && item.MenuURI) {
            this.router.navigate([item.MenuURI]);
        }
        if (item.ttMenu && item.ttMenu.length) {
            this.expanded = !this.expanded;
        }
    }
    getIconClass(type: string) {
        let iconName = '';
        switch (type) {
            case 'Administration':
                iconName = 'k-icon k-i-globe-outline';
                break;
            case 'Finance Services':
                iconName = 'k-icon k-i-dollar k-i-currency';
                break;
            case 'Members':
                iconName = 'k-icon k-i-user';
                break;
            default:
                iconName = 'k-icon k-i-file-txt k-i-txt';
        }
        return iconName;
    }
}
