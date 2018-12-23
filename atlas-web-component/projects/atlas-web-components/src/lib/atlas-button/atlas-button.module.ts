import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasButtonComponent } from './components/atlas-button.component';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { AtlasColorDirective } from './directives/atlas-color.directive';
import { createCustomElement } from '@angular/elements';
@NgModule({
    declarations: [AtlasButtonComponent, AtlasColorDirective],
    entryComponents: [AtlasButtonComponent],
    imports: [CommonModule, ButtonModule],
    exports: [AtlasButtonComponent],
})
export class AtlasButtonModule {}
