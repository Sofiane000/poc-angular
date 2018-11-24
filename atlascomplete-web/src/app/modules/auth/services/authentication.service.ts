import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    isAuthorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isRefreshed: boolean;
    constructor(private router: Router) { }

    login() {
        sessionStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/']);
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
