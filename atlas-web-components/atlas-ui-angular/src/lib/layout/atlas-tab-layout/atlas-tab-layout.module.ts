import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasTabLayoutComponent } from './components/atlas-tab-layout.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material';
@NgModule({
    declarations: [
        AtlasTabLayoutComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        RouterModule
    ],
    exports: [
        AtlasTabLayoutComponent,
        RouterModule
    ],
})
export class AtlasTabLayoutModule {
}
