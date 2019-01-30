import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INavLink } from '../models/nav-link';
@Component({
    selector: 'atlas-tab-layout',
    templateUrl: './atlas-tab-layout.component.html',
    styleUrls: ['./atlas-tab-layout.component.scss'],
})
export class AtlasTabLayoutComponent implements OnInit {
    @Input() navLinks: INavLink[];
    activeLinkIndex: number;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.navLinks.indexOf(
                this.navLinks.find((tab) => tab.link === this.router.url)
            );
        });
    }
}
