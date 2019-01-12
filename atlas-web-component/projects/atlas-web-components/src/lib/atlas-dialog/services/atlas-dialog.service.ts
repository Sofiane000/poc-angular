import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { DialogService } from '@progress/kendo-angular-dialog';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dist/es2015/dialog/dialog-container.service';
@Injectable()
export class AtlasDialogService extends DialogService {
    constructor(
        componentFactoryResolver: ComponentFactoryResolver,
        dialogContainerService: DialogContainerService
    ) {
        super(componentFactoryResolver, dialogContainerService);
    }
}
