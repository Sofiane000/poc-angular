import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasInputComponent } from './components/atlas-input.component';
import { FormsModule } from '@angular/forms';
import {
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
} from '@angular/material';
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
