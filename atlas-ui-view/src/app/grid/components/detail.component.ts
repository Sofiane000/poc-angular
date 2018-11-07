import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['detail.component.css']
})
export class DetailComponent implements OnInit {
  userDetail: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userDetail = Object.assign({}, this.userService.selectedUser);
  }

}
