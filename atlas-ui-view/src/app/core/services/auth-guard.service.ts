import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuardService {

    constructor(private authentication: AuthenticationService, private router: Router) { }

    canActivate(): boolean | Promise<boolean> {

        const isAuthenticated = this.authentication.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['/login']);
            return false;
        } else {
            this.authentication.isAuthorized.next(true);
            return true;
        }
    }
}
