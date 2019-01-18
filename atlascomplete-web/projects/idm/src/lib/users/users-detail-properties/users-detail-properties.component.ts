import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
    selector: 'app-users-detail-properties',
    templateUrl: './users-detail-properties.component.html',
    styleUrls: ['./users-detail-properties.component.scss'],
})
export class UsersDetailPropertiesComponent implements OnInit {
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
