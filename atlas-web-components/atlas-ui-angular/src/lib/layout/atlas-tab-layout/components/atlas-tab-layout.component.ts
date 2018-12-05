
import { Component, Input, OnInit } from '@angular/core';
import { INavLink } from '../models/nav-link';
import { Router } from '@angular/router';
import { routerTransition } from '../../../atlas-content/animations/animation';
@Component({
    selector: 'atlas-tab-layout',
    templateUrl: './atlas-tab-layout.component.html',
    styleUrls: ['./atlas-tab-layout.component.scss'],
    animations: [routerTransition]
})
export class AtlasTabLayoutComponent implements OnInit {
    @Input() navLinks: INavLink[];
    activeLinkIndex: number;
    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === this.router.url));
        });
    }
}
