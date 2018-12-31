import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentSecurityDirective } from './component-security/component.security.directive';

@NgModule({
    declarations: [ComponentSecurityDirective],
    imports: [HttpClientModule],
    exports: [ComponentSecurityDirective],
})
export class AtlasWebServicesModule {}
