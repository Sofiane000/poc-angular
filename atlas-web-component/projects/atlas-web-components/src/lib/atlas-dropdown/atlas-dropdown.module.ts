import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AtlasMultiselectComponent } from './components/atlas-multiselect/atlas-multiselect.component';

@NgModule({
    declarations: [AtlasMultiselectComponent],
    entryComponents: [AtlasMultiselectComponent],
    imports: [CommonModule, DropDownsModule, FormsModule],
    exports: [AtlasMultiselectComponent],
})
export class AtlasDropdownModule {}
