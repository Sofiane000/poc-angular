import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlasDialogLayoutComponent } from './components/atlas-dialog-layout.component';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        AtlasDialogLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AtlasDialogLayoutComponent,
        RouterModule
    ],
})
export class AtlasDialogLayoutModule {
}
