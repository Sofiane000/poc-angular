import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentSecurityService, DataAccessFactory, DataAccessService, AppSession } from 'atlas-web-services';

@Injectable()
export class AuthenticationService {

    userCompDA: DataAccessService;

    constructor(private router: Router, dataAccessFactory: DataAccessFactory, private compSecSvc: ComponentSecurityService,
        private sessionService: AppSession) {
        this.userCompDA = dataAccessFactory.getService('idm.user.components');
    }

    login() {
        // check here user/password
        // after successful login - load user permissions
        this.userCompDA.get().subscribe((userComponents) => {
            this.compSecSvc.loadSecurityMap(userComponents.data);
            this.sessionService.setDetails();
            this.router.navigate(['/']);
        });
    }

    logout() {
        this.sessionService.clear();
        this.sessionService.isLoggedIn = false;
        sessionStorage.clear();
        this.router.navigate(['login']);
    }

}
