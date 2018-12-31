import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AtlasToolbarButton, ButtonAction } from 'projects/atlas-web-components/src/public_api';
import { AtlasDialogFormTestComponent } from '../atlas-dialog-form-test/atlas-dialog-form-test.component';

@Component({
    selector: 'atlas-toolbar-test',
    templateUrl: './atlas-toolbar-test.component.html',
    styleUrls: ['./atlas-toolbar-test.component.scss'],
})
export class AtlasToolbarTestComponent implements OnInit {
    buttons: AtlasToolbarButton[] = [
        {
            title: 'Print Invoice',
            action: ButtonAction.PrintInvoice,
            icon: 'fa-print',
            class: 'grid-pdf',
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
