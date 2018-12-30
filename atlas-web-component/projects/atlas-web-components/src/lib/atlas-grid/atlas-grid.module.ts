import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ExcelModule, GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { AtlasToolbarModule } from '../atlas-toolbar/atlas-toolbar.module';
import { AtlasGridComponent } from './components/atlas-grid.component';

@NgModule({
    declarations: [AtlasGridComponent],
    entryComponents: [AtlasGridComponent],
    imports: [
        CommonModule,
        ButtonModule,
        GridModule,
        DialogModule,
        FormsModule,
        PDFModule,
        ExcelModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        AtlasToolbarModule,
    ],
    exports: [AtlasGridComponent, DialogModule],
})
export class AtlasGridModule {}
