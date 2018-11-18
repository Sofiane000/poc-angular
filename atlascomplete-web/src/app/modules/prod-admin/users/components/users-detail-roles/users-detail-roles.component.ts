import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USER_DATA } from '../../models/user';

@Component({
  selector: 'app-users-detail-roles',
  templateUrl: './users-detail-roles.component.html',
  styleUrls: ['./users-detail-roles.component.css']
})
export class UsersDetailRolesComponent implements OnInit {

  userDetail: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      const id = +params['id'];
      this.userDetail = USER_DATA.find(user => user.LoginSK === id);
    });
  }

}
