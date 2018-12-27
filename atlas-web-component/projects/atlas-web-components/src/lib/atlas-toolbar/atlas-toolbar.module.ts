import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasToolbarComponent } from './components/atlas-toolbar.component';
import {
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';

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
    ],
    exports: [AtlasToolbarComponent],
    providers: [],
})
export class AtlasToolbarModule {}
