import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IAtlasFooterbtn } from '../models/atlas-footer-btn';
@Component({
    selector: 'atlas-dialog-footer',
    templateUrl: './atlas-dialog-footer.component.html',
    styleUrls: ['./atlas-dialog-footer.component.scss'],
})
export class AtlasDialogFooterComponent implements OnChanges {
    @Input() isSaveDisabled: any;
    @Input() showYesNo: boolean;
    @Output() close = new EventEmitter<any>();
    @Input() useButtons: IAtlasFooterbtn[];

    constructor() {}

    onBtnClick(action) {
        this.close.emit(action);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.useButtons.find((e) => e.action === 'save').isDisabled = changes.isSaveDisabled
            .currentValue
            ? true
            : false;
    }
}
