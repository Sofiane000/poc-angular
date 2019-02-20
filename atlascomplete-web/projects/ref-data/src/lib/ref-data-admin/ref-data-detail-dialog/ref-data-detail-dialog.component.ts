import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentCanDeactivate } from '@atlas/web-services';
import { Subscription } from 'rxjs';
import { RefDataDetailService } from '../shared/ref-data-detail.service';
import { RefDataListService } from '../shared/ref-data-list.service';
import { RefDataDetailFormDialogComponent } from './ref-data-detail-form-dialog.component';

@Component({
    selector: 'lib-ref-data-detail-dialog',
    template: '',
})
export class RefDataDetailDialogComponent extends ComponentCanDeactivate implements OnDestroy {
    selectedRefData: any;
    dialogRef: any;
    dialogConfig: MatDialogConfig = {
        disableClose: true,
        width: '400px',
        height: '385px',
        closeOnNavigation: false,
        panelClass: 'custom-dialog-container',
    };
    routeSubscription: Subscription;
    tenantSK: number;
    typeSK: number;

    constructor(
        private dialog: MatDialog,
        private refDataListService: RefDataListService,
        private refDataDetailService: RefDataDetailService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        super();
        this.route.parent.params.subscribe((params) => {
            const tenantSK = +params['id'];
            const typeSK = +params['id2'];

            if (typeSK && tenantSK) {
                this.typeSK = typeSK;
                this.tenantSK = tenantSK;
            }
        });

        this.routeSubscription = this.route.params.subscribe((params) => {
            const dataSK = +params['id3'];
            if (this.typeSK && this.tenantSK && !isNaN(dataSK)) {
                this.refDataDetailService
                    .getRefDataDetailById(dataSK)
                    .subscribe((selectedRefData) => {
                        const startDate = new Date(selectedRefData[0].EfctvStartDt);
                        const endDate = new Date(selectedRefData[0].EfctvEndDt);

                        startDate.setHours(24);
                        endDate.setHours(24);

                        selectedRefData[0].EfctvStartDt = startDate;
                        selectedRefData[0].EfctvEndDt = endDate;

                        this.selectedRefData = selectedRefData[0];
                        this.openDialog(RefDataDetailFormDialogComponent);
                    });
            } else {
                this.openDialog(RefDataDetailFormDialogComponent);
            }
        });
    }

    openDialog(dialogComponent) {
        const isNew = this.selectedRefData ? false : true;
        this.dialogRef = this.dialog.open(dialogComponent, this.dialogConfig);
        if (!isNew) {
            this.dialogRef.componentInstance.model = this.selectedRefData;
        }
        this.dialogRef.componentInstance.isNew = isNew;
        this.dialogRef.afterClosed().subscribe((result) => {
            if (result === 'save') {
                this.refDataDetailService.saveRefDataDetail({
                    isAdd: isNew,
                    data: this.dialogRef.componentInstance.editForm.value,
                });
            }
            this.router.navigate([
                'ref-data/administration/tenant/' + this.tenantSK + '/detail/' + this.typeSK,
            ]);
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
