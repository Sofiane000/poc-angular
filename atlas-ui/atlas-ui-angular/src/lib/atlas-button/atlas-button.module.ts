import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasButtonComponent } from './components/atlas-button.component';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { AtlasColorDirective } from './directives/atlas-color.directive';

@NgModule({
  declarations: [AtlasButtonComponent, AtlasColorDirective],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    AtlasButtonComponent
  ]
})
export class AtlasButtonModule { }
