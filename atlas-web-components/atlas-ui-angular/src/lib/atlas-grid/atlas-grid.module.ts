import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasGridComponent } from './components/atlas-grid.component';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AtlasGridComponent],
  imports: [
    CommonModule,
    ButtonModule,
    GridModule,
    DialogModule,
    PDFModule,
    ExcelModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    AtlasGridComponent,
    DialogModule
  ]
})
export class AtlasGridModule { }
