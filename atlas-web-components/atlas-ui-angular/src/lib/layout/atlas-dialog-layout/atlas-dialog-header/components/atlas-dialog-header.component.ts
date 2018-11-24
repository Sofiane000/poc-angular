import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'atlas-dialog-header',
    templateUrl: './atlas-dialog-header.component.html',
    styleUrls: ['./atlas-dialog-header.component.css']
})
export class AtlasDialogHeaderComponent {
    @Input() title = 'Custom Dialog';
    @Input() isDirty: boolean;
    @Output() close = new EventEmitter<any>();
    onClose(action) {
        this.close.emit(action);
    }
}