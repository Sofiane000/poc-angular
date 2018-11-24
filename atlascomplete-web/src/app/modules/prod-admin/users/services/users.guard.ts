import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
@Injectable()
export class UsersGuardService {

    constructor(private authentication: AuthenticationService, private router: Router) { }

    canActivate(): boolean | Promise<boolean> {
        if (this.authentication.isRefreshed) {
            return true;
        } else {
            this.router.navigate(['/administration/users']);
            return false;
        }
    }
}
