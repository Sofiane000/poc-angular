import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AtlasPageFooterComponent } from './components/atlas-page-footer.component';
@NgModule({
    declarations: [AtlasPageFooterComponent],
    imports: [CommonModule, ButtonsModule],
    exports: [AtlasPageFooterComponent],
})
export class AtlasPageFooterModule {}
