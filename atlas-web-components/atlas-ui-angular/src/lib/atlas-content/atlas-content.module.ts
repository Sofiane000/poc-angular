import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasContentComponent } from './components/atlas-content.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
@NgModule({
    declarations: [
        AtlasContentComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RouterModule,
        AtlasContentComponent
    ],
})
export class AtlasContentModule {
}
