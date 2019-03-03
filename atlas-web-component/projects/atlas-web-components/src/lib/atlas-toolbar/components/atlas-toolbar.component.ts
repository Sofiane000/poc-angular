import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AtlasGridComponent } from '../../atlas-grid/components/atlas-grid.component';
import {
    IMultiRowComponent,
    MultiRowSelection,
} from '../../shared/multi-row-component/multi-row-component.service';
import { IAtlasToolbarButton } from '../models/atlas-toolbar-button';
import { ButtonAction } from '../models/button-action';

@Component({
    selector: 'atlas-toolbar',
    templateUrl: 'atlas-toolbar.component.html',
    styleUrls: ['atlas-toolbar.component.scss'],
})
export class AtlasToolbarComponent implements OnInit, OnDestroy {
    filterValue: string;
    subscription: any;
    @Input()
    filterButtons: IAtlasToolbarButton[];

    useButtons: IAtlasToolbarButton[];
    private actionButtons: IAtlasToolbarButton[] = [
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
            title: 'Upload',
            action: ButtonAction.Upload,
            icon: 'fa-upload',
        },
        {
            title: 'Refresh',
            action: ButtonAction.Refresh,
            icon: 'fa-refresh',
            class: 'refresh-btn',
        },
    ];
    @Input() showAddEditButtons = true;
    @Input() buttons: IAtlasToolbarButton[];
    @Input() parent: IMultiRowComponent;
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
        if (!(this.parent instanceof AtlasGridComponent)) {
            this.actionButtons.splice(3, 1).map((item) => item);
        }

        this.useButtons = this.showAddEditButtons
            ? [...this.actionButtons, ...this.buttons]
            : this.buttons.map((item) => item);

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

    hideAddButton(isHidden: boolean) {
        this.useButtons[0].isHidden = isHidden;
    }

    hideEditButton(isHidden: boolean) {
        this.useButtons[1].isHidden = isHidden;
    }

    hideDeleteButton(isHidden: boolean) {
        this.useButtons[2].isHidden = isHidden;
    }

    hideUploadButton(isHidden: boolean) {
        this.useButtons[3].isHidden = isHidden;
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
