import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentCanDeactivate } from '@atlas/web-services';
import { Subscription } from 'rxjs';
import { MenusDialogFormComponent } from '../menus-dialog-form/menus-dialog-form.component';
import { MenusService } from '../shared/menus.service';

@Component({
    selector: 'app-menus-dialog',
    template: '',
})
export class MenusDialogComponent extends ComponentCanDeactivate implements OnDestroy {
    selectedTenant: any;
    dialogRef: any;
    dialogConfig: MatDialogConfig = {
        disableClose: true,
        width: '450px',
        height: '400px',
        closeOnNavigation: false,
        panelClass: 'custom-dialog-container',
    };
    routeSubscription: Subscription;

    constructor(
        private dialog: MatDialog,
        private menuService: MenusService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super();
        this.routeSubscription = this.route.params.subscribe((params) => {
            const tenantTaxnmySK = +params['id'];
            if (tenantTaxnmySK) {
                this.menuService.getMenuById(tenantTaxnmySK).subscribe((userDetail) => {
                    this.selectedTenant = userDetail;
                    this.openDialog();
                });
            } else {
                this.openDialog();
            }
        });
    }

    openDialog() {
        const isNew = this.selectedTenant ? false : true;
        if (!isNew) {
            this.dialogConfig.height = '400px';
        }
        this.dialogRef = this.dialog.open(MenusDialogFormComponent, this.dialogConfig);
        if (!isNew) {
            this.dialogRef.componentInstance.model = this.selectedTenant;
        }
        this.dialogRef.componentInstance.isNew = isNew;
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result === 'save') {
                this.menuService.saveTenant({
                    isAdd: isNew,
                    data: this.dialogRef.componentInstance.form.value,
                });
            }
            this.router.navigate(['idm/menus']);
        });
    }

    canDeactivate(): boolean {
        if (this.dialogRef) {
            if (this.dialogRef.componentInstance && !this.dialogRef.componentInstance.form.dirty) {
                this.dialogRef.close();
                return true;
            } else if (
                this.dialogRef.componentInstance &&
                this.dialogRef.componentInstance.form.dirty
            ) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    ngOnDestroy(): void {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
        }
    }
}
