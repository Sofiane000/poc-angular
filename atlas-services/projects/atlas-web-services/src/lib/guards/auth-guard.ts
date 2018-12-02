import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppSession } from '../../public_api';
@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {

    constructor(private session: AppSession, private router: Router) { }

    canActivate(): boolean | Promise<boolean> {

        const isAuthenticated = this.session.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['/login']);
            return false;
        } else {
            this.session.isAuthorized.next(true);
            return true;
        }
    }
}
