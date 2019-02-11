import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAtlasFooterbtn } from '../models/atlas-footer-btn';
@Component({
    selector: 'atlas-dialog-footer',
    templateUrl: './atlas-dialog-footer.component.html',
    styleUrls: ['./atlas-dialog-footer.component.scss'],
})
export class AtlasDialogFooterComponent {
    @Input() isSaveDisabled: any;
    @Input() showYesNo: boolean;
    @Output() close = new EventEmitter<any>();
    @Input() useButtons: IAtlasFooterbtn[];

    constructor() {}

    onBtnClick(action) {
        this.close.emit(action);
    }
}
