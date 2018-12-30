import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {
    MultiRowComponent,
    MultiRowSelection,
} from '../../shared/multi-row-component/multi-row-component.service';
import { AtlasToolbarButton } from '../models/atlas-toolbar-button';
import { ButtonAction } from '../models/button-action';

@Component({
    selector: 'atlas-toolbar',
    templateUrl: 'atlas-toolbar.component.html',
    styleUrls: ['atlas-toolbar.component.scss'],
})
export class AtlasToolbarComponent implements OnInit, OnDestroy {
    filterValue: string;
    subscription: any;

    useButtons: AtlasToolbarButton[];
    private actionButtons: AtlasToolbarButton[] = [
        {
            title: 'Add',
            action: ButtonAction.Add,
            icon: 'fa-plus',
        },
        {
            title: 'Edit',
            action: ButtonAction.Edit,
            icon: 'fa-pencil',
            isDisabled: true,
        },
        {
            title: 'Remove',
            action: ButtonAction.Remove,
            icon: 'fa-trash',
            isDisabled: true,
        },
        {
            title: 'Refresh',
            action: ButtonAction.Refresh,
            icon: 'fa-refresh',
            class: 'refresh-btn',
        },
    ];
    @Input() showAddEditButtons = true;
    @Input() buttons: AtlasToolbarButton[];
    @Input() parent: MultiRowComponent;
    @Input() canSearch: boolean;
    @Input() showSortBy: boolean;
    @Input() selectedStatus = 'Default View';
    @Input() statusValues: string[] = [
        'Default View',
        'Task Title',
        'Workflow',
        'Due',
        'Assigned To',
        'Created',
        'Time Remaining',
        'Priority',
    ];
    @Output() action: EventEmitter<any> = new EventEmitter();

    onBtnClick(event: any, buttonAction: ButtonAction) {
        this.action.emit({ event, action: buttonAction });
    }

    ngOnInit(): void {
        if (!this.parent) {
            return; // no parent
        }
        if (this.showAddEditButtons) {
            this.useButtons = [...this.actionButtons, ...this.buttons];
        } else {
            this.useButtons = this.buttons.map((item) => item);
        }
        if (this.parent.selectionChange) {
            this.subscription = this.parent.selectionChange.subscribe(
                (selection: MultiRowSelection) => {
                    this.onSelectionChanged(
                        selection.selectedRows && selection.selectedRows.length > 0
                    );
                }
            );
        }
    }

    onSelectionChanged(hasRowsSelected: boolean) {
        this.actionButtons[1].isDisabled = !hasRowsSelected;
        this.actionButtons[2].isDisabled = !hasRowsSelected;
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
