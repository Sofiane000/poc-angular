import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { AtlasMenuItemComponent } from './components/atlas-menu-item.component';
import { AtlasMenuComponent } from './components/atlas-menu.component';

@NgModule({
    declarations: [
        AtlasMenuComponent,
        AtlasMenuItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        RouterModule,
        AtlasMenuComponent,
        AtlasMenuItemComponent
    ],
})
export class AtlasMenuModule {
}
