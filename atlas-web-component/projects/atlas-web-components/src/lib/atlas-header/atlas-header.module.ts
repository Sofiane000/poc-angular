import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AtlasHeaderComponent } from './components/atlas-header.component';
@NgModule({
    declarations: [AtlasHeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
    ],
    exports: [RouterModule, AtlasHeaderComponent],
})
export class AtlasHeaderModule {}
