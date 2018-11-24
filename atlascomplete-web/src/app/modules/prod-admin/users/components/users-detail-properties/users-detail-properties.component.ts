import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-users-detail-properties',
  templateUrl: './users-detail-properties.component.html',
  styleUrls: ['./users-detail-properties.component.css']
})
export class UsersDetailPropertiesComponent implements OnInit {
  userDetail: any;
  constructor(private route: ActivatedRoute, private peopleService: PeopleService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      const loginSk = +params['id'];
      this.peopleService.getUserById(loginSk).subscribe(userDetail => this.userDetail = userDetail);
    });
  }

}
