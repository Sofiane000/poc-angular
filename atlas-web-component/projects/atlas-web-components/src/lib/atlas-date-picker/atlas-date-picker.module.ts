import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { AtlasDatePickerComponent } from './components/atlas-date-picker.component';
@NgModule({
    declarations: [AtlasDatePickerComponent],
    imports: [CommonModule, DatePickerModule, FormsModule],
    exports: [AtlasDatePickerComponent],
})
export class AtlasDatePickerModule {}
