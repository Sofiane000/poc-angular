import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentSecurityService, DataAccessFactory, DataAccessService, AppSession } from 'atlas-web-services';

@Injectable()
export class AuthenticationService {
    userCompDA: DataAccessService;
    get router() {
        return this.injector.get(Router);
    }

    constructor(private injector: Injector, dataAccessFactory: DataAccessFactory, private compSecSvc: ComponentSecurityService,
        private sessionService: AppSession) {
        dataAccessFactory.createService('idm.user.components').module('idm').url('user/components');
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
    checkSession() {
        if (this.sessionService.isAuthenticated()) {
            this.userCompDA.get().subscribe((userComponents) => {
                this.compSecSvc.loadSecurityMap(userComponents.data);
            });
        }
    }
}
