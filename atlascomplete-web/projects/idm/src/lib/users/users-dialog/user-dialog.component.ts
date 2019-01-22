import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentCanDeactivate } from '@atlas/web-services';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/user.service';
import { UsersDialogFormComponent } from './users-dialog-form.component';

@Component({
    selector: 'app-users-dialog',
    template: '',
})
export class UsersDialogComponent extends ComponentCanDeactivate implements OnDestroy {
    routeSubscription: Subscription;
    selectedUser: any;
    dialogRef: any;
    dialogConfig: MatDialogConfig = {
        disableClose: true,
        width: '800px',
        maxWidth: '850px',
        height: '550px',
        closeOnNavigation: false,
        panelClass: 'custom-dialog-container',
    };

    constructor(
        private userService: UserService,
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super();
        this.routeSubscription = this.route.params.subscribe((params) => {
            const loginSk = +params['id'];
            if (loginSk) {
                this.userService.getUserById(loginSk).subscribe((userDetail) => {
                    this.selectedUser = userDetail;
                    this.openDialog();
                });
            } else {
                this.openDialog();
            }
        });
    }

    openDialog() {
        const isNew = this.selectedUser ? false : true;
        if (!isNew) {
            this.dialogConfig.height = '620px';
        }
        this.dialogRef = this.dialog.open(UsersDialogFormComponent, this.dialogConfig);
        if (!isNew) {
            this.dialogRef.componentInstance.model = this.selectedUser;
        }
        this.dialogRef.componentInstance.isNew = isNew;
        this.dialogRef.afterClosed().subscribe((result) => {
            this.userService.selectedUser = null;
            this.router.navigate(['idm/users']);
        });
    }

    canDeactivate(): boolean {
        if (this.dialogRef) {
            if (
                this.dialogRef.componentInstance &&
                !this.dialogRef.componentInstance.editForm.dirty
            ) {
                this.dialogRef.close();
                return true;
            } else if (
                this.dialogRef.componentInstance &&
                this.dialogRef.componentInstance.editForm.dirty
            ) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    ngOnDestroy() {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
        }
    }
}
