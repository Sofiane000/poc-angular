import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import {
    AtlasButtonModule,
    AtlasDialogModule,
    AtlasDialogService,
    AtlasGridModule,
} from '@atlas/web-components';
import { AtlasWebServicesModule } from '@atlas/web-services';
import { UsersModule } from '../users/users.module';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { ComponentsRoutingModule } from './components.routing.module';
@NgModule({
    declarations: [ButtonExampleComponent],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        AtlasButtonModule,
        AtlasGridModule,
        AtlasDialogModule.forRoot(),
        UsersModule,
        AtlasWebServicesModule,
    ],
    providers: [AtlasDialogService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompManagementModule {}
