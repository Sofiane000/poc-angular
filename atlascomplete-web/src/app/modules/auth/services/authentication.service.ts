import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ComponentSecurityService, DataAccessFactory, DataAccessService } from 'atlas-web-services';

@Injectable()
export class AuthenticationService {

  isAuthorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isRefreshed: boolean;
  userCompDA: DataAccessService;

  constructor(private router: Router, dataAccessFactory: DataAccessFactory, private compSecSvc: ComponentSecurityService) {
    this.userCompDA = dataAccessFactory.getService('idm.user.components');
  }

  login() {
      // check here user/password
      // after successful login - load user permissions
      this.userCompDA.get().subscribe((userComponents) => {
        this.compSecSvc.loadSecurityMap(userComponents.data);
        sessionStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/']);
      });
  }

  logout() {
      sessionStorage.clear();
      this.router.navigate(['login']);
  }

  isAuthenticated() {
      const isAuthenticated = sessionStorage.getItem('isAuthenticated');

      if (isAuthenticated === 'true') {
          return true;
      } else {
          return false;
      }
  }

}
