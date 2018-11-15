import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components.routing.module';
import { AtlasButtonModule, AtlasGridModule, AtlasDialogService, AtlasDialogModule } from 'atlas-ui-angular';
import { ButtonExampleComponent } from './components/button-example/button-example.component';
@NgModule({
  declarations: [ButtonExampleComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AtlasButtonModule,
    AtlasGridModule,
    AtlasDialogModule.forRoot()
  ],
  providers: [
    AtlasDialogService
  ]
})
export class ComponentsModule { }
