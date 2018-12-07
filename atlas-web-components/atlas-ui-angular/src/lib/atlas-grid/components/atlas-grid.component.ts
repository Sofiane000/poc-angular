import {
    Component,
    OnInit,
    Input,
    OnDestroy,
    EventEmitter,
    Output,
    ViewChild,
    AfterViewInit,
} from '@angular/core';
import { IColumnSetting } from '../models/grid-column-setting';
import { State, process, GroupDescriptor } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult, GridComponent } from '@progress/kendo-angular-grid';
import { AtlasGridService } from '../services/atlas-grid.service';
import { Subscription } from 'rxjs';
import { AtlasDialogService } from '../../atlas-dialog/services/atlas-dialog.service';
import {
    MultiRowComponent,
    MultiRowSelection,
    Selectable,
} from '../../shared/multi-row-component/multi-row-component.service';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';

@Component({
    selector: 'atlas-grid',
    templateUrl: './atlas-grid.component.html',
    styleUrls: ['./atlas-grid.component.scss'],
    providers: [AtlasDialogService],
})
export class AtlasGridComponent implements OnInit, OnDestroy, AfterViewInit, MultiRowComponent {
    data: any[];
    showAddModel: boolean;
    selectedRowIndex: number;
    baseUrl = window.location.href;

    @Input() canAdd: boolean;
    @Input() canEdit: boolean;
    @Input() canDelete: boolean;
    @Input() pdfOption: any;
    @Input() excelOption: any;
    @Input() isGroupable: boolean;
    @Input() showExcelExport: boolean;
    @Input() showPdfExport: boolean;
    @Input() groupDescriptor: GroupDescriptor[];
    @Input() columns: IColumnSetting[];
    @Input() isPageable: boolean;
    @Input() isFilterable: boolean;
    @Input() isSortable: boolean;
    @Input() routeParamProperty: string;
    @Input() routeUrl: string;
    @Input() state: State;
    @Input() isEditable: boolean;
    @Input() height: string;
    @Input() isLoading: boolean;
    @Input() gridService: AtlasGridService;
    @Input() selectable: Selectable;
    @Input() showSelectAll: boolean;
    @Input() editDataItem: any;
    @Input() selectedKeys: any[];
    @Input() gridDataResult: GridDataResult;
    @Output() add: EventEmitter<any> = new EventEmitter<any>();
    @Output() edit: EventEmitter<any> = new EventEmitter<any>();
    @Output() remove: EventEmitter<any> = new EventEmitter<any>();
    @Output() viewDetail: EventEmitter<any> = new EventEmitter<any>();
    @Output() selectionChange: EventEmitter<MultiRowSelection> = new EventEmitter<
        MultiRowSelection
    >();

    @ViewChild(GridComponent)
    public grid: GridComponent;

    private gridServiceSubscription: Subscription;

    constructor(private dialogService: AtlasDialogService) {
        this.allData = this.allData.bind(this);
    }

    ngOnInit() {
        this.gridService.query(this.state);
        this.gridServiceSubscription = this.gridService.subscribe((response) => {
            if (response) {
                if (!this.data) {
                    this.data = [];
                }
                this.data.push(...response);
                this.gridDataResult = process(this.data, this.state);
            }
        });
    }
    ngAfterViewInit() {
        // attaches scroll event
        const scrolldiv = document.getElementsByClassName('k-grid-content')[0];
        if (scrolldiv) {
            scrolldiv.addEventListener('scroll', this.loadMoreData.bind(this));
        }
    }
    loadMoreData(event) {
        // adds more data and passed grid data.
        const scrollAdjustment = 10;
        if (
            event.target.scrollTop !== 0 &&
            event.target.clientHeight + event.target.scrollTop + scrollAdjustment >=
                event.target.scrollHeight
        ) {
            if (this.gridService.rowId) {
                this.gridService.query(this.state);
            }
        }
    }
    dataStateChange(event: DataStateChangeEvent) {
        this.state = event;
        // this.gridService.query(event);
        this.gridDataResult = process(this.data, this.state);
    }
    allData(): ExcelExportData {
        const result: ExcelExportData = {
            data: this.data,
            group: this.state.group,
        };
        return result;
    }

    refreshGrid() {
        this.state.skip = 0;
        // this.gridService.query({});
        this.gridDataResult = process(this.data, this.state);
        this.selectedKeys = [];
    }
    selectBy(e) {
        return e.dataItem;
    }
    onSelectionChange(e) {
        this.selectedRowIndex = e.selectedRows.length ? e.index : undefined;
        this.selectionChange.emit({ selectedRows: e.selectedRows, selectedRowIdx: e.index });
    }
    onViewDetail({ dataItem }) {
        this.viewDetail.emit({ dataItem });
    }
    exportAsPdf() {
        this.grid.saveAsPDF();
    }
    exportAsExcel() {
        this.grid.saveAsExcel();
    }
    ngOnDestroy() {
        this.gridServiceSubscription.unsubscribe();
    }
}
