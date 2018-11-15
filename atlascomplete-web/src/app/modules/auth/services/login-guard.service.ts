import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class LoginGuardService {

    constructor(private authentication: AuthenticationService, private router: Router) { }

    canActivate(): boolean | Promise<boolean> {

        const isAuthenticated = this.authentication.isAuthenticated();
        if (!isAuthenticated) {
            return true;
        } else {
            this.router.navigate(['/administration/users']);
            return false;
        }
    }
}
