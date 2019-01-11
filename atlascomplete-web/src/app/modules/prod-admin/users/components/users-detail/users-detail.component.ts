import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INavLink } from '@atlas/web-components/lib/layout/atlas-tab-layout/models/nav-link';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-users-detail',
    templateUrl: './users-detail.component.html',
    styleUrls: ['users-detail.component.scss'],
})
export class UsersDetailComponent implements OnInit {
    userDetail: any;
    navLinks: INavLink[];

    constructor(
        private userService: UserService,
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
        // this.userDetail = Object.assign({}, this.userService.selectedUser);
        this.route.params.subscribe((params) => {
            const loginSk = +params['id'];
            this.userService
                .getUserById(loginSk)
                .subscribe((userDetail) => (this.userDetail = userDetail));
        });
    }

    goBackHandler(event) {
        this.router.navigate(['/administration/users']);
    }
}
