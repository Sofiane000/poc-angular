import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { AtlasButtonComponent } from './components/atlas-button.component';
import { AtlasColorDirective } from './directives/atlas-color.directive';
@NgModule({
    declarations: [AtlasButtonComponent, AtlasColorDirective],
    entryComponents: [AtlasButtonComponent],
    imports: [CommonModule, ButtonModule],
    exports: [AtlasButtonComponent],
})
export class AtlasButtonModule {}
