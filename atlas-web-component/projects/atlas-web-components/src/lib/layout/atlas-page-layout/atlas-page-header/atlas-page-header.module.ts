import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AtlasPageHeaderComponent } from './components/atlas-page-header.component';
@NgModule({
    declarations: [AtlasPageHeaderComponent],
    entryComponents: [AtlasPageHeaderComponent],
    imports: [CommonModule, ButtonsModule, MatButtonModule, MatIconModule],
    exports: [AtlasPageHeaderComponent],
})
export class AtlasPageHeaderModule {}
