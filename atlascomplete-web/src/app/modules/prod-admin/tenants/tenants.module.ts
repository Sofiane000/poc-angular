import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantsRoutingModule } from './tenants.routing.module';
import { AtlasTreeModule, AtlasDialogModule, AtlasPageHeaderModule, AtlasPageContentModule, AtlasPageFooterModule } from 'atlas-ui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TenantsTreeComponent } from './components/tenants-tree/tenants-tree.component';
import { TenantsDialogFormComponent } from './components/tenants-dialog/tenants-dialog.component';
import { TenantsService } from './services/tenants.service';

@NgModule({
  declarations: [
    TenantsTreeComponent,
    TenantsDialogFormComponent
  ],
  entryComponents: [TenantsDialogFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    TenantsRoutingModule,
    AtlasTreeModule,
    ReactiveFormsModule,
    AtlasDialogModule.forRoot(),
    AtlasPageHeaderModule,
    AtlasPageContentModule,
    AtlasPageFooterModule,
  ],
  providers: [
    TenantsService
  ]
})
export class TenantsModule { }
