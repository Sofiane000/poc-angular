import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'atlas-dialog-footer',
    templateUrl: './atlas-dialog-footer.component.html',
    styleUrls: ['./atlas-dialog-footer.component.scss']
})
export class AtlasDialogFooterComponent {
    @Input() isSaveDisabled: any;
    @Output() close = new EventEmitter<any>();
    constructor() {
    }
    onClose(action) {
        this.close.emit(action);
    }
}
