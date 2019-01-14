import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-users-detail-tenants',
    templateUrl: './users-detail-tenants.component.html',
    styleUrls: ['./users-detail-tenants.component.scss'],
})
export class UsersDetailTenantsComponent implements OnInit {
    userDetail: any;

    constructor(private route: ActivatedRoute, private userService: UserService) {}

    ngOnInit() {
        this.route.parent.params.subscribe((params) => {
            const loginSk = +params['id'];
            this.userService
                .getUserById(loginSk)
                .subscribe((userDetail) => (this.userDetail = userDetail));
        });
    }
}
