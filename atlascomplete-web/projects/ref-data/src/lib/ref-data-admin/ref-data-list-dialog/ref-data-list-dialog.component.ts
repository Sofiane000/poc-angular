import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AtlasDialogBoxService } from '@atlas/web-components';
import { ComponentCanDeactivate } from '@atlas/web-services';
import { Subscription } from 'rxjs';
import { RefDataListService } from '../shared/ref-data-list.service';
import { RefDataListFormDialogComponent } from './ref-data-list-form-dialog.component';

@Component({
    selector: 'lib-ref-data-list-dialog',
    template: '',
})
export class RefDataListDialogComponent extends ComponentCanDeactivate implements OnDestroy {
    routeSubscription: Subscription;
    selectedUser: any;
    dialogRef: any;
    dialogConfig: MatDialogConfig = {
        disableClose: true,
        width: '400px',
        maxWidth: '600px',
        height: '230px',
        closeOnNavigation: false,
        panelClass: 'custom-dialog-container',
    };

    constructor(
        private refDataListService: RefDataListService,
        private dialogBox: AtlasDialogBoxService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super();
        this.routeSubscription = this.route.params.subscribe((params) => {
            const loginSk = +params['id'];
            if (loginSk) {
                this.refDataListService.getRefDataListById(loginSk).subscribe((userDetail) => {
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
            this.dialogConfig.height = '230px';
        }
        this.dialogRef = this.dialogBox.open(RefDataListFormDialogComponent, this.dialogConfig);
        if (!isNew) {
            this.dialogRef.componentInstance.model = this.selectedUser;
        }
        this.dialogRef.componentInstance.isNew = isNew;
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result === 'save') {
                this.refDataListService.saveRefDataList({
                    isAdd: isNew,
                    data: this.dialogRef.componentInstance.editForm.value,
                });
            }

            this.refDataListService.selectedRefDataList = null;
            this.router.navigate(['ref-data/administration']);
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
