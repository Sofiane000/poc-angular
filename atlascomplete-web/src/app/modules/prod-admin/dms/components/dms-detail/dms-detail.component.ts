import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INavLink } from 'atlas-web-components/lib/layout/atlas-tab-layout/models/nav-link';
import { DmsService } from '../../services/dms.service';

@Component({
    selector: 'app-dms-detail',
    templateUrl: './dms-detail.component.html',
    styleUrls: ['dms-detail.component.scss'],
})
export class DmsDetailComponent implements OnInit {
    dmsDetail: any;
    navLinks: INavLink[];

    constructor(
        private dmsService: DmsService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.navLinks = [
            {
                label: 'SCHEMA AND TEMPLATE',
                link: 'schema',
                index: 0,
            },
            {
                label: 'STORAGE TIERS',
                link: 'storage',
                index: 1,
            },
            {
                label: 'PERMISSIONS',
                link: 'permissions',
                index: 2,
            },
        ];

        this.route.params.subscribe((params) => {
            const DocCatgSK = +params['id'];
            this.dmsService
                .getDmsById(DocCatgSK)
                .subscribe((dmsDetail) => (this.dmsDetail = dmsDetail));
        });
    }

    goBackHandler(event) {
        this.router.navigate(['/administration/dms']);
    }
}
