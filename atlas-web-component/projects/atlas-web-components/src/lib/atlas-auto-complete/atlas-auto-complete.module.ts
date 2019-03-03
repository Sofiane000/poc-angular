import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
} from '@angular/material';
import { AtlasAutoCompleteComponent } from './components/atlas-auto-complete.component';

@NgModule({
    declarations: [AtlasAutoCompleteComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatAutocompleteModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [AtlasAutoCompleteComponent],
})
export class AtlasAutoCompleteModule {}
