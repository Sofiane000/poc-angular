import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
} from '@angular/material';
import { AtlasToolbarComponent } from './components/atlas-toolbar.component';

@NgModule({
    declarations: [AtlasToolbarComponent],
    entryComponents: [AtlasToolbarComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
    ],
    exports: [AtlasToolbarComponent],
    providers: [],
})
export class AtlasToolbarModule {}
