import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { ButtonRoutingModule } from './button.routing.module';
import { AtlasButtonModule, AtlasGridModule, AtlasDialogService, AtlasDialogModule } from 'atlas-ui-angular';
@NgModule({
  declarations: [ButtonExampleComponent],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    AtlasButtonModule,
    AtlasGridModule,
    AtlasDialogModule.forRoot()
  ],
  providers: [
    AtlasDialogService
  ]
})
export class ButtonModule { }
