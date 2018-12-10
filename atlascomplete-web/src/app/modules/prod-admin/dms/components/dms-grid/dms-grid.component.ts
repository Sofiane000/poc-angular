import { Component, OnInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { DmsService } from '../../services/dms.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {
    IColumnSetting,
    AtlasToolbarButton,
    ButtonAction,
    AtlasGridComponent,
} from 'atlas-ui-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentViewerService } from 'src/app/modules/doc-viewer/services/doc-viewer.service';
import { ScreenService, DeviceType } from 'atlas-web-services';

@Component({
    selector: 'app-dms-grid',
    templateUrl: './dms-grid.component.html',
    styleUrls: ['./dms-grid.component.scss'],
    providers: [DocumentViewerService],
})
export class DmsGridComponent implements OnInit, OnDestroy {
    buttons: AtlasToolbarButton[] = [
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
        enabled: true,
        mode: 'single',
        checkboxOnly: true,
    };
    sortable: any = {
        allowUnsort: true,
        mode: 'multiple',
    };
    devTypeSub: any;
    columnsData: IColumnSetting[];
    dmsServiceChild: DmsService;
    selectedKeys: any[] = [];
    selectBy = 'DocCatgSK';
    @ViewChild('container', { read: ViewContainerRef })
    public containerRef: ViewContainerRef;
    @ViewChild(AtlasGridComponent)
    public atlasGrid: AtlasGridComponent;

    constructor(
        private dmsService: DmsService,
        private router: Router,
        private dialog: MatDialog,
        private docViewer: DocumentViewerService,
        private screenService: ScreenService
    ) {
        this.dmsServiceChild = dmsService;
        this.dmsServiceChild = dmsService;
        this.devTypeSub = this.screenService.onDeviceTypeChange.subscribe(
            (deviceType: DeviceType) => {
                console.log(deviceType);
            }
        );
    }

    ngOnInit() {
        this.initialization();
    }

    initialization() {
        this.columnsData = this.columnsData = [
            {
                field: '"DocCatgTypeCode"',
                title: 'Category',
                width: 60,
                isFilterable: true,
            },
        ];
    }

    viewHandler({ dataItem }) {
        this.dmsService.selectedDms = dataItem;
        this.router.navigate(['/administration/dms/' + dataItem.DocCatgSK + '/tenants']);
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
        this.devTypeSub.unsubscribe();
    }
}
