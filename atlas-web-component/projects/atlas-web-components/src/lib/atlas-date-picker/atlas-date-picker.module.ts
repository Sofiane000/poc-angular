import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { AtlasDatePickerComponent } from './components/atlas-date-picker.component';
@NgModule({
    declarations: [AtlasDatePickerComponent],
    entryComponents: [AtlasDatePickerComponent],
    imports: [CommonModule, DatePickerModule, FormsModule, InputsModule],
    exports: [AtlasDatePickerComponent],
})
export class AtlasDatePickerModule {}
