import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ButtonAction, IAtlasToolbarButton } from 'projects/atlas-web-components/src/public_api';
import { AtlasDialogFormTestComponent } from '../atlas-dialog-form-test/atlas-dialog-form-test.component';

@Component({
    selector: 'atlas-toolbar-test',
    templateUrl: './atlas-toolbar-test.component.html',
    styleUrls: ['./atlas-toolbar-test.component.scss'],
})
export class AtlasToolbarTestComponent implements OnInit {
    buttons: IAtlasToolbarButton[] = [
        {
            title: 'Print Invoice',
            action: ButtonAction.PrintInvoice,
            icon: 'fa-print',
            class: 'grid-pdf',
        },
        {
            title: 'Print Invoice',
            action: ButtonAction.PrintInvoice,
            icon: 'fa-print',
            class: 'grid-pdf',
            isFilterMenu: true,
        },
    ];
    filterButtons = [
        {
            title: 'Export As Pdf',
            action: ButtonAction.ExportAsPdf,
            icon: 'fa-file-pdf-o',
            class: 'grid-pdf',
            text: 'Export PDF',
        },
        {
            title: 'Export As Excel',
            action: ButtonAction.ExportAsExcel,
            icon: 'fa-file-excel-o',
            class: 'grid-excel',
            text: 'Export Excel',
        },
    ];

    constructor(private dialog: MatDialog) {}

    ngOnInit() {}

    actionHandler(eventResponse) {
        switch (eventResponse.action) {
            case ButtonAction.Add:
                this.showAddDialog();
                break;
        }
    }

    showAddDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = '500px';
        dialogConfig.height = '190px';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.panelClass = 'custom-dialog-container';
        const dialogRef = this.dialog.open(AtlasDialogFormTestComponent, dialogConfig);
    }
}
