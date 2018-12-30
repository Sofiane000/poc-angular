import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AtlasContentComponent } from './components/atlas-content.component';
@NgModule({
    declarations: [AtlasContentComponent],
    imports: [CommonModule, RouterModule],
    exports: [RouterModule, AtlasContentComponent],
})
export class AtlasContentModule {}
