import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components.routing.module';
import {
    AtlasButtonModule,
    AtlasGridModule,
    AtlasDialogService,
    AtlasDialogModule
} from 'atlas-web-components';
import { ButtonExampleComponent } from './components/button-example/button-example.component';
import { AtlasWebServicesModule } from 'atlas-web-services';
import { UsersModule } from '../users/users.module';
@NgModule({
    declarations: [ButtonExampleComponent],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        AtlasButtonModule,
        AtlasGridModule,
        AtlasDialogModule.forRoot(),
        UsersModule,
        AtlasWebServicesModule
    ],
    providers: [AtlasDialogService],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ComponentsModule {
}
