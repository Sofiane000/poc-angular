import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasSideNavContainerComponent } from './components/atlas-sidenav-container.component';
import { AtlasSideBarModule } from '../atlas-sidebar/atlas-sidebar.module';
import { AtlasContentModule } from '../atlas-content/atlas-content.module';
import { AtlasMenuModule } from '../atlas-menu/atlas-menu.module';
import { MatSidenavModule } from '@angular/material';
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
