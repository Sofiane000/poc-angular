import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AtlasTabLayoutComponent } from './components/atlas-tab-layout.component';
@NgModule({
    declarations: [AtlasTabLayoutComponent],
    entryComponents: [AtlasTabLayoutComponent],
    imports: [CommonModule, MatTabsModule, RouterModule],
    exports: [AtlasTabLayoutComponent, RouterModule],
})
export class AtlasTabLayoutModule {}
