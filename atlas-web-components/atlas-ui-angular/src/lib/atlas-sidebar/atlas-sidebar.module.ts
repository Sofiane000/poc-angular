import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasSideBarComponent } from './components/atlas-sidebar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
@NgModule({
    declarations: [
        AtlasSideBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule
    ],
    exports: [
        RouterModule,
        AtlasSideBarComponent
    ],
})
export class AtlasSideBarModule {
}
