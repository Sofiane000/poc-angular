import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
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
        MatCheckboxModule,
    ],
    exports: [AtlasToolbarComponent],
    providers: [],
})
export class AtlasToolbarModule {}
