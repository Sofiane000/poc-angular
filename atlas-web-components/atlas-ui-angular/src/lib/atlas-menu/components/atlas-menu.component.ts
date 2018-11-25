
import { Component, OnInit, Input } from '@angular/core';
import { IMenuItem } from '../models/menu-item';
@Component({
    selector: 'atlas-menu',
    templateUrl: './atlas-menu.component.html',
    styleUrls: ['./atlas-menu.component.scss']
})
export class AtlasMenuComponent implements OnInit {
    @Input()
    menuItems: IMenuItem[] = [];
    ngOnInit(): void {
    }
}
