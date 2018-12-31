import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AtlasMenuItemComponent } from './components/atlas-menu-item.component';
import { AtlasMenuComponent } from './components/atlas-menu.component';

@NgModule({
    declarations: [AtlasMenuComponent, AtlasMenuItemComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
    ],
    exports: [RouterModule, AtlasMenuComponent, AtlasMenuItemComponent],
})
export class AtlasMenuModule {}
