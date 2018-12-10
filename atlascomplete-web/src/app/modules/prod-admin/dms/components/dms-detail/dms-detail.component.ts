import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DmsService } from '../../services/dms.service';
import { INavLink } from 'atlas-ui-angular/lib/layout/atlas-tab-layout/models/nav-link';

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
                label: 'Tenants',
                link: 'tenants',
                index: 0,
            },
            {
                label: 'Roles',
                link: 'roles',
                index: 1,
            },
            {
                label: 'Properties',
                link: 'properties',
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
