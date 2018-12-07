import { Component, Output, EventEmitter, Input, OnInit, OnDestroy } from '@angular/core';
import { AtlasToolbarButton } from '../models/atlas-toolbar-button';
import { ButtonAction } from '../models/button-action';
import {
    MultiRowComponent,
    MultiRowSelection,
} from '../../shared/multi-row-component/multi-row-component.service';

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

    @Input() buttons: Array<AtlasToolbarButton>;
    @Input() parent: MultiRowComponent;
    @Input() canSearch: boolean;
    @Output() action: EventEmitter<any> = new EventEmitter();

    onBtnClick(event: any, buttonAction: ButtonAction) {
        this.action.emit({ event: event, action: buttonAction });
    }

    ngOnInit(): void {
        if (!this.parent) {
            return; // no parent
        }
        this.useButtons = [...this.actionButtons, ...this.buttons];
        this.subscription = this.parent.selectionChange.subscribe(
            (selection: MultiRowSelection) => {
                this.onSelectionChanged(
                    selection.selectedRows && selection.selectedRows.length > 0
                );
            }
        );
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
