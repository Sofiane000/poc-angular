import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasButtonComponent } from './components/atlas-button.component';
import { ButtonModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [AtlasButtonComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    AtlasButtonComponent
  ]
})
export class AtlasButtonModule { }
