
import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { IMenuItem } from '../../models/menu-item';
@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.css'],
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
export class MenuItemComponent implements OnInit {

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
                iconName = 'account_box';
                break;
            case 'Finance Services':
                iconName = 'attach_money';
                break;
            case 'Members':
                iconName = 'person';
                break;
            default:
                iconName = 'assignment';
        }
        return iconName;
    }
}
