import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { AtlasCardFieldComponent } from './components/atlas-card-field/atlas-card-field.component';
import { AtlasCardItemComponent } from './components/atlas-card-item/atlas-card-item.component';
import { AtlasCardComponent } from './components/atlas-card/atlas-card.component';

@NgModule({
    declarations: [AtlasCardComponent, AtlasCardItemComponent, AtlasCardFieldComponent],
    entryComponents: [AtlasCardComponent, AtlasCardItemComponent, AtlasCardFieldComponent],
    imports: [CommonModule, MatCardModule],
    exports: [AtlasCardComponent, AtlasCardItemComponent, AtlasCardFieldComponent],
})
export class AtlasCardModule {}
