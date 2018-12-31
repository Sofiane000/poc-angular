import { DialogService } from '@progress/kendo-angular-dialog';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { DialogContainerService } from '@progress/kendo-angular-dialog/dist/es2015/dialog/dialog-container.service';
@Injectable()
export class AtlasDialogService extends DialogService {
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private dialogContainerService: DialogContainerService) {
        super(componentFactoryResolver, dialogContainerService);
    }
}
