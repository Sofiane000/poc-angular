import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
} from '@angular/material';
import { AtlasInputComponent } from './components/atlas-input.component';
@NgModule({
    declarations: [AtlasInputComponent],
    entryComponents: [AtlasInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
    ],
    exports: [AtlasInputComponent],
})
export class AtlasInputModule {}
