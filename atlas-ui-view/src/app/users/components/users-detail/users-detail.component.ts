import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { USER_DATA } from '../../models/user';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  userDetail: any;
  constructor(private userService: UserService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    // this.userDetail = Object.assign({}, this.userService.selectedUser);
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.userDetail = USER_DATA.find(user => user.LoginSK == id);
    });
  }

}
