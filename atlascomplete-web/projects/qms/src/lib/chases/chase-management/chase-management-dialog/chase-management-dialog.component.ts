import { Component, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentCanDeactivate } from '@atlas/web-services';
import { Subscription } from 'rxjs';
import { AssignWorkQueueFormComponent } from '../assign-work-queue-form/assign-work-queue-form.component';
import { ChaseMemberSearchFormComponent } from '../chase-member-search-form/chase-member-search-form.component';
import { ChaseProviderSearchFormComponent } from '../chase-provider-search-form/chase-provider-search-form.component';
import { ChaseMembersService } from '../shared/chase-members.service';
import { ChaseProviderService } from '../shared/chase-provider.service';
import { ChaseService } from '../shared/chase.service';
import { UpdateChaseStatusFormComponent } from '../update-chase-status-form/update-chase-status-form.component';

@Component({
    selector: 'lib-chase-management-dialog',
    template: '',
})
export class ChaseManagementDialogComponent extends ComponentCanDeactivate implements OnDestroy {
    routeSubscription: Subscription;
    selectedMembers: any;
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
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute,
        private chaseService: ChaseService,
        private memberService: ChaseMembersService,
        private providerService: ChaseProviderService
    ) {
        super();
        this.routeSubscription = this.route.params.subscribe((params) => {
            this.openDialog();
        });
    }

    openDialog() {
        if (this.router.url === '/qms/chases/management/action/update') {
            this.dialogConfig.height = '325px';
            this.dialogConfig.width = '400px';
            this.dialogRef = this.dialog.open(UpdateChaseStatusFormComponent, this.dialogConfig);
            this.dialogRef.afterClosed().subscribe((result) => {
                if (result === 'update') {
                    this.chaseService.saveSelectedChaseMembers({
                        isAssign: false,
                        data: this.dialogRef.componentInstance.updateForm.value,
                    });
                }

                this.router.navigate(['qms/chases/management']);
            });
        } else if (this.router.url === '/qms/chases/management/action/assign') {
            this.dialogConfig.height = '210px';
            this.dialogConfig.width = '400px';
            this.dialogRef = this.dialog.open(AssignWorkQueueFormComponent, this.dialogConfig);
            this.dialogRef.afterClosed().subscribe((result) => {
                if (result === 'assign') {
                    this.chaseService.saveSelectedChaseMembers({
                        isAssign: true,
                        data: this.dialogRef.componentInstance.assignForm.value,
                    });
                }

                this.router.navigate(['qms/chases/management']);
            });
        } else if (this.router.url === '/qms/chases/management/search/member') {
            this.dialogConfig.height = '660px';
            this.dialogConfig.width = '600px';
            this.dialogRef = this.dialog.open(ChaseMemberSearchFormComponent, this.dialogConfig);
            this.dialogRef.afterClosed().subscribe((result) => {
                if (result === 'select') {
                    this.memberService.saveSelectedMember({
                        data: this.dialogRef.componentInstance.selectedKeys,
                    });
                }

                this.router.navigate(['qms/chases/management']);
            });
        } else if (this.router.url === '/qms/chases/management/search/provider') {
            this.dialogConfig.height = '660px';
            this.dialogConfig.width = '600px';
            this.dialogRef = this.dialog.open(ChaseProviderSearchFormComponent, this.dialogConfig);
            this.dialogRef.afterClosed().subscribe((result) => {
                if (result === 'select') {
                    this.providerService.saveSelectedProvider({
                        data: this.dialogRef.componentInstance.selectedKeys,
                    });
                }

                this.router.navigate(['qms/chases/management']);
            });
        }
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
