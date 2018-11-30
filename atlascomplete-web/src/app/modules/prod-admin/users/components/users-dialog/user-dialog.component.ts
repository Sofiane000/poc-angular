import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UsersDialogFormComponent } from './users-dialog-form.component';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from 'src/app/modules/shared/components/component-can-deactivate';

@Component({
    selector: 'app-users-dialog',
    template: ''
})
export class UsersDialogComponent extends ComponentCanDeactivate {
    dialogRef: any;
    dialogConfig: MatDialogConfig = {
        disableClose: true,
        width: '800px',
        maxWidth: '850px',
        height: '500px',
        closeOnNavigation: false,
        panelClass: 'custom-dialog-container'
    };
    constructor(private userService: UserService, private dialog: MatDialog,
        private router: Router) {
        super();
        this.openDialog();
    }
    openDialog() {
        const isNew = this.userService.selectedUser ? false : true;
        if (!isNew) {
            this.dialogConfig.height = '569px';
        }
        this.dialogRef = this.dialog.open(UsersDialogFormComponent, this.dialogConfig);
        if (!isNew) {
            this.dialogRef.componentInstance.model = this.userService.selectedUser;
        }
        this.dialogRef.componentInstance.isNew = isNew;
        this.dialogRef.afterClosed().subscribe(result => {
            this.userService.selectedUser = null;
            this.router.navigate(['administration/users']);
        });
    }
    canDeactivate(): boolean {
        if (this.dialogRef) {
            if (this.dialogRef.componentInstance && !this.dialogRef.componentInstance.editForm.dirty) {
                this.dialogRef.close();
                return true;
            } else if (this.dialogRef.componentInstance && this.dialogRef.componentInstance.editForm.dirty) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
}
