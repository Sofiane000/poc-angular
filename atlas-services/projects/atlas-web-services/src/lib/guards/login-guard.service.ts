import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppSession } from '../session/session.service';
@Injectable({
    providedIn: 'root',
})
export class LoginGuardService {

    constructor(private session: AppSession, private router: Router) { }

    canActivate(): boolean | Promise<boolean> {

        const isAuthenticated = this.session.isAuthenticated();
        if (!isAuthenticated) {
            return true;
        } else {
            this.router.navigate(['/administration/users']);
            return false;
        }
    }
}
