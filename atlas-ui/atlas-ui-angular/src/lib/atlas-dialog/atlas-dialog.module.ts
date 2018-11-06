import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogService, DialogsModule, DialogSettings } from '@progress/kendo-angular-dialog';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dist/es2015/dialog/dialog-container.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DialogModule
    ],
    exports: [
        DialogModule
    ],
})
export class AtlasDialogModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AtlasDialogModule,
            providers: [
                DialogContainerService,
                DialogService]
        };
    }
}
