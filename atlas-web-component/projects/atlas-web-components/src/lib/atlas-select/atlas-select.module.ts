import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { AtlasSelectComponent } from './components/atlas-select.component';

@NgModule({
    declarations: [AtlasSelectComponent],
    imports: [CommonModule, MatSelectModule, FormsModule],
    exports: [AtlasSelectComponent],
})
export class AtlasSelectModule {}
