import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AtlasToolbarButton } from '../models/atlas-toolbar-button';
import { ButtonAction } from '../models/button-action';

@Component({
    selector: 'atlas-toolbar',
    templateUrl: 'atlas-toolbar.component.html',
    styleUrls: ['atlas-toolbar.component.scss']
})
export class AtlasToolbarComponent {
    filterValue: string;
    @Input() buttons: AtlasToolbarButton[];
    @Input() parent: string;
    @Output() action: EventEmitter<any> = new EventEmitter();

    onBtnClick(event: any, buttonAction: ButtonAction) {
        this.action.emit({ event: event, action: buttonAction });
    }
}
