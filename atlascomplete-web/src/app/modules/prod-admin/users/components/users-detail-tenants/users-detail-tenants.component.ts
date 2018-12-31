import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
    selector: 'app-users-detail-tenants',
    templateUrl: './users-detail-tenants.component.html',
    styleUrls: ['./users-detail-tenants.component.scss'],
})
export class UsersDetailTenantsComponent implements OnInit {
    userDetail: any;

    constructor(private route: ActivatedRoute, private peopleService: PeopleService) {}

    ngOnInit() {
        this.route.parent.params.subscribe((params) => {
            const loginSk = +params['id'];
            this.peopleService
                .getUserById(loginSk)
                .subscribe((userDetail) => (this.userDetail = userDetail));
        });
    }
}
