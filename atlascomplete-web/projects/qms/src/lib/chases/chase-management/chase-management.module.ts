import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import {
    AtlasAutoCompleteModule,
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
    AtlasSelectModule,
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
import { ChaseViewDescriptionComponent } from './chase-view-description/chase-view-description.component';
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
        ChaseViewDescriptionComponent,
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
        AtlasSelectModule,
        AtlasDialogModule,
        MatTabsModule,
        AtlasDialogModule.forRoot(),
        AtlasInputModule,
        AtlasToolbarModule,
        AtlasDropdownModule,
        AtlasButtonModule,
        AtlasDatePickerModule,
        AtlasAutoCompleteModule,
    ],
    entryComponents: [
        UpdateChaseStatusFormComponent,
        AssignWorkQueueFormComponent,
        ChaseMemberSearchFormComponent,
        ChaseProviderSearchFormComponent,
        ChaseViewDescriptionComponent,
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

        this.dataAccessFactory
            .createService('qms.providers')
            .module('qms')
            .url('providers');
    }
}
