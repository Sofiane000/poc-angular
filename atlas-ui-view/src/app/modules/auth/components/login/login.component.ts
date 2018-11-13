import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    constructor(private router: Router, private authService: AuthenticationService,
        public notification: MatSnackBar) { }

    ngOnInit() {
    }

    login() {
        if (this.username === 'bstark' && this.password === 'eric') {
            this.authService.login();
        } else {
            this.notification.open('Invalid Credentials', 'close', {
                duration: 500,
            });
        }
    }

}
