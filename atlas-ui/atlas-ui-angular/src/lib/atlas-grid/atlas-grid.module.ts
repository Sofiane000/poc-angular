import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasGridComponent } from './components/atlas-grid.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';

@NgModule({
  declarations: [AtlasGridComponent],
  imports: [
    CommonModule,
    ButtonModule,
    GridModule,
    DialogModule
  ],
  exports: [
    AtlasGridComponent,
    DialogModule
  ]
})
export class AtlasGridModule { }
