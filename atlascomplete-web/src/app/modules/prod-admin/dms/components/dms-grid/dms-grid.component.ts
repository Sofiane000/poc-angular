import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import {
    AtlasGridComponent,
    AtlasToolbarButton,
    AtlasToolbarComponent,
    ButtonAction,
    IColumnSetting,
} from 'atlas-web-components';
import { DocumentViewerService } from 'src/app/modules/doc-viewer/services/doc-viewer.service';
import { DmsService } from '../../services/dms.service';

@Component({
    selector: 'app-dms-grid',
    templateUrl: './dms-grid.component.html',
    styleUrls: ['./dms-grid.component.scss'],
    providers: [DocumentViewerService],
})
export class DmsGridComponent implements OnInit, OnDestroy {
    buttons: AtlasToolbarButton[] = [
        {
            title: 'Refresh',
            action: ButtonAction.Refresh,
            icon: 'fa-refresh',
            class: 'refresh-btn',
        },
        {
            title: 'Export As Pdf',
            action: ButtonAction.ExportAsPdf,
            icon: 'fa-file-pdf-o',
            class: 'grid-pdf',
        },
        {
            title: 'Export As Excel',
            action: ButtonAction.ExportAsExcel,
            icon: 'fa-file-excel-o',
            class: 'grid-excel',
        },
    ];
    gridState: any = {
        pageSize: 10,
    };
    pdfOption: any = {
        fileName: 'Atlas-dms-grid.pdf',
        allPages: true,
        paperSize: 'A4',
        repeatHeaders: true,
        landscape: true,
        title: 'Atlas dms',
    };
    excelOption: any = {
        fileName: 'Atlas-dms-grid.xlsx',
        title: 'Atlas dms',
    };
    selectableSettings: any = {
        enabled: false,
        mode: 'single',
        checkboxOnly: true,
    };
    sortable: any = {
        allowUnsort: true,
        mode: 'multiple',
    };
    columnsData: IColumnSetting[];
    dmsServiceChild: DmsService;
    selectedKeys: any[] = [];
    selectBy = 'DocCatgSK';
    @ViewChild('container', { read: ViewContainerRef })
    public containerRef: ViewContainerRef;
    @ViewChild(AtlasGridComponent)
    public atlasGrid: AtlasGridComponent;
    @ViewChild(AtlasToolbarComponent)
    public atlasToolbar: AtlasToolbarComponent;

    constructor(
        private dmsService: DmsService,
        private router: Router,
        private dialog: MatDialog,
        private docViewer: DocumentViewerService
    ) {
        this.dmsServiceChild = dmsService;
    }

    ngOnInit() {
        this.initialization();
    }

    initialization() {
        this.columnsData = this.columnsData = [
            {
                field: 'DocCatgTypeCode',
                title: 'Document Category',
                width: 250,
            },
        ];
    }

    viewHandler({ dataItem }) {
        this.dmsService.selectedDms = dataItem;
        this.router.navigate(['/administration/dms/' + dataItem.DocCatgSK + '/schema']);
        // this.router.navigate(['/grid/details']);
    }

    removeHandler(dataItem?: any) {}

    actionHandler(eventResponse: any) {
        switch (eventResponse.action) {
            case ButtonAction.Refresh:
                this.atlasGrid.state.filter = null;
                this.atlasGrid.state.sort = [];
                this.atlasGrid.state.group = [];
                this.atlasGrid.refreshGrid();
                break;
            case ButtonAction.ExportAsExcel:
                this.atlasGrid.exportAsExcel();
                break;
            case ButtonAction.ExportAsPdf:
                this.atlasGrid.exportAsPdf();
                break;
            case ButtonAction.PrintInvoice:
                this.docViewer.showDocument('sample.pdf');
                break;
        }
    }

    onSelectionChange() {
        setTimeout(() => {
            if (this.atlasGrid.selectedKeys.length <= 0) {
                this.buttons[0].isDisabled = true;
            } else {
                this.buttons[0].isDisabled = false;
            }
        }, 100);
    }

    ngOnDestroy(): void {
        this.dmsService.rowId = '';
    }
}
