import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { USER_DATA } from '../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {
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
