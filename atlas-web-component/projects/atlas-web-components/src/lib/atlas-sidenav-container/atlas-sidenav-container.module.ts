import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { AtlasContentModule } from '../atlas-content/atlas-content.module';
import { AtlasMenuModule } from '../atlas-menu/atlas-menu.module';
import { AtlasSideBarModule } from '../atlas-sidebar/atlas-sidebar.module';
import { AtlasSideNavContainerComponent } from './components/atlas-sidenav-container.component';
@NgModule({
    declarations: [AtlasSideNavContainerComponent],
    entryComponents: [AtlasSideNavContainerComponent],
    imports: [
        CommonModule,
        MatSidenavModule,
        AtlasContentModule,
        AtlasSideBarModule,
        AtlasMenuModule,
    ],
    exports: [AtlasSideNavContainerComponent],
})
export class AtlasSideNavContainerModule {}
