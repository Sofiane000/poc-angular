import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasGridComponent } from './components/atlas-grid.component';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AtlasToolbarModule } from '../atlas-toolbar/atlas-toolbar.module';

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
