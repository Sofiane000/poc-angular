import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import {
    AtlasButtonModule,
    AtlasDatePickerModule,
    AtlasDialogContentModule,
    AtlasDialogFooterModule,
    AtlasDialogHeaderModule,
    AtlasDialogModule,
    AtlasDropdownModule,
    AtlasGridModule,
    AtlasInputModule,
    AtlasPageContentModule,
    AtlasPageFooterModule,
    AtlasPageHeaderModule,
    AtlasTabLayoutModule,
    AtlasToolbarModule,
} from '@atlas/web-components';
import { DataAccessFactory } from '@atlas/web-services';
import { SharedModule } from 'src/app/modules/shared/shared.module';

import { HttpModule } from '@angular/http';
import { AssignWorkQueueFormComponent } from './assign-work-queue-form/assign-work-queue-form.component';
import { ChaseManagementDialogComponent } from './chase-management-dialog/chase-management-dialog.component';
import { ChaseManagementRoutingModule } from './chase-management-routing.module';
import { ChaseManagementComponent } from './chase-management/chase-management.component';
import { ChaseMemberSearchFormComponent } from './chase-member-search-form/chase-member-search-form.component';
import { ChaseProviderSearchFormComponent } from './chase-provider-search-form/chase-provider-search-form.component';
import { ChaseMembersService } from './shared/chase-members.service';
import { ChaseService } from './shared/chase.service';
import { UpdateChaseStatusFormComponent } from './update-chase-status-form/update-chase-status-form.component';

@NgModule({
    declarations: [
        ChaseManagementComponent,
        ChaseManagementDialogComponent,
        UpdateChaseStatusFormComponent,
        AssignWorkQueueFormComponent,
        ChaseMemberSearchFormComponent,
        ChaseProviderSearchFormComponent,
    ],
    imports: [
        CommonModule,
        ChaseManagementRoutingModule,
        SharedModule.forRoot(),
        ReactiveFormsModule,
        AtlasGridModule,
        AtlasPageHeaderModule,
        AtlasPageContentModule,
        AtlasTabLayoutModule,
        AtlasPageFooterModule,
        AtlasDialogHeaderModule,
        AtlasDialogFooterModule,
        AtlasDialogContentModule,
        AtlasDialogModule,
        MatTabsModule,
        AtlasDialogModule.forRoot(),
        AtlasInputModule,
        AtlasToolbarModule,
        AtlasDropdownModule,
        AtlasButtonModule,
        AtlasDatePickerModule,
    ],
    entryComponents: [
        UpdateChaseStatusFormComponent,
        AssignWorkQueueFormComponent,
        ChaseMemberSearchFormComponent,
        ChaseProviderSearchFormComponent,
    ],
    providers: [ChaseService, ChaseMembersService],
})
export class ChaseManagementModule {
    constructor(private dataAccessFactory: DataAccessFactory) {
        // initialise applicable services for data-access
        this.dataAccessFactory
            .createService('qms.chase')
            .module('qms')
            .url('chase');

        this.dataAccessFactory
            .createService('qms.members')
            .module('qms')
            .url('members');
    }
}
