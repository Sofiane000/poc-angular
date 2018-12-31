import { EventEmitter } from '@angular/core';
import { SelectableSettings } from '@progress/kendo-angular-grid';

export class MultiRowSelection {
    selectedRows: any[];
    selectedRowIdx: number;
}

// tslint:disable-next-line
export interface Selectable extends SelectableSettings {}

export interface MultiRowComponent {
    // flag indicates whethe multi-select is supported
    selectable: Selectable;

    // controlls whether add/edit/delete actions are supported
    canAdd: boolean;
    canEdit: boolean;
    canDelete: boolean;

    // publishes event every time selection changes
    selectionChange: EventEmitter<MultiRowSelection>;
}
