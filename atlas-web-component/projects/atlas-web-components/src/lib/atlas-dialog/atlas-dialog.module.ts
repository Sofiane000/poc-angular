import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DialogModule, DialogService } from '@progress/kendo-angular-dialog';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dist/es2015/dialog/dialog-container.service';
import { AtlasDialogService } from './services/atlas-dialog.service';

@NgModule({
    declarations: [],
    imports: [CommonModule, DialogModule],
    exports: [DialogModule],
})
export class AtlasDialogModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AtlasDialogModule,
            providers: [DialogContainerService, DialogService, AtlasDialogService],
        };
    }
}
