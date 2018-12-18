import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasToolbarComponent } from './components/atlas-toolbar.component';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AtlasToolbarComponent],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        FormsModule
    ],
    exports: [AtlasToolbarComponent],
    providers: []
})
export class AtlasToolbarModule {

}
