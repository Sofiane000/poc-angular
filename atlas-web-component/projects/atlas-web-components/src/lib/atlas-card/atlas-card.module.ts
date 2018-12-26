import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasCardComponent } from './components/atlas-card/atlas-card.component';
import { AtlasCardItemComponent } from './components/atlas-card-item/atlas-card-item.component';
import { AtlasCardFieldComponent } from './components/atlas-card-field/atlas-card-field.component';
import { MatCardModule } from '@angular/material';

@NgModule({
    declarations: [AtlasCardComponent, AtlasCardItemComponent, AtlasCardFieldComponent],
    imports: [CommonModule, MatCardModule],
    exports: [AtlasCardComponent, AtlasCardItemComponent, AtlasCardFieldComponent],
})
export class AtlasCardModule {}
