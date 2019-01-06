import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { DataStateChangeEvent, GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { GroupDescriptor, process, State } from '@progress/kendo-data-query';
import { Subscription } from 'rxjs';
import {
    IMultiRowComponent,
    MultiRowSelection,
    Selectable,
} from '../../shared/multi-row-component/multi-row-component.service';
import { IColumnSetting } from '../models/grid-column-setting';
import { AtlasGridService } from '../services/atlas-grid.service';
import { TestService } from '../services/test-grid.service';

@Component({
    selector: 'atlas-grid',
    templateUrl: './atlas-grid.component.html',
    styleUrls: ['./atlas-grid.component.scss'],
})
export class AtlasGridComponent implements OnInit, OnDestroy, AfterViewInit, IMultiRowComponent {
    /**
     * Currently selected row index.
     */
    selectedRowIndex: number;
    /**
     * Base url of the application.
     */
    baseUrl = window.location.href;
    /**
     * Template reference for grid component.
     */
    @ViewChild(GridComponent)
    public grid: GridComponent;
    /**
     *  sofiane to review it later on when we have implemented service in js.
     * Will be removed later on.
     */
    @Input() data: any[];
    /**
     * Allow user to disable add button.
     */
    @Input() canAdd: boolean;
    /**
     * Allow user to disable edit button.
     */
    @Input() canEdit: boolean;
    /**
     * Allow user to disable delete button.
     */
    @Input() canDelete: boolean;
    /**
     * Object which specifies configuration for export pdf.
     */
    @Input() pdfOption: any;
    /**
     * Object which specifies configuration for export excel.
     */
    @Input() excelOption: any;
    /**
     * Allows user to enable or disable grouping.
     */
    @Input() isGroupable: boolean;
    /**
     * The group descriptor used by the groupBy method.
     * It has the following properties:
     * aggregates? Array<AggregateDescriptor>
     * The aggregates which are calculated during grouping.
     *      dir? "asc" | "desc"
     * The sort order of the group.
     * field string.
     * The data item field to group by.
     */
    @Input() groupDescriptor: GroupDescriptor[];
    /**
     * Array of column settings
     */
    @Input() columns: IColumnSetting[];
    /**
     * Enables or disable paging.
     */
    @Input() isPageable: boolean;
    /**
     * Enables or disable filtering.
     */
    @Input() isFilterable: boolean;
    /**
     * Enables or disable sorting.
     */
    @Input() isSortable: boolean;
    /**
     * Paramter for the route.
     */
    @Input() routeParamProperty: string;
    /**
     * Route url for the selected row.
     */
    @Input() routeUrl: string;
    /**
     * The state of the data operations applied to the Grid component.
     */
    @Input() state: State;
    /**
     * Enable or disable view details.
     */
    @Input() isEditable: boolean;
    /**
     * Sets the height of the grid.
     */
    @Input() height: string;
    /**
     * Sets the loader of the grid.
     */
    @Input() isLoading: boolean;
    /**
     * Service which provides implementation of the get opertaion.
     */
    @Input() gridService: AtlasGridService;
    /**
     * Object which provies various selection options.
     */
    @Input() selectable: Selectable;
    /**
     * Sets the row height.
     */
    @Input() rowHeight: any;
    /**
     * Enable or disable select all option.
     */
    @Input() showSelectAll: boolean;
    /**
     * Sets the current selected rows.
     */
    @Input() selectedKeys: any[];
    /**
     * Data result that is binded to the grid data source.
     */
    @Input() gridDataResult: GridDataResult;
    /**
     * Event emitter for view details event.
     */
    @Output() viewDetail: EventEmitter<any> = new EventEmitter<any>();
    /**
     * Event emitter for selected row change.
     */
    @Output() selectionChange: EventEmitter<MultiRowSelection> = new EventEmitter<
        MultiRowSelection
    >();

    private gridServiceSubscription: Subscription;

    /**
     * @ignore
     */

    constructor() {
        this.allData = this.allData.bind(this);
    }

    /**
     * @ignore
     */
    ngOnInit() {
        if (this.gridService) {
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
        } else {
            // sofiane to review temporary till we will find some solution to handle this class in javascript.
            this.gridService = new TestService();
        }
    }

    /**
     * @ignore
     */
    ngAfterViewInit() {
        const scrolldiv = document.getElementsByClassName('k-grid-content')[0];
        if (scrolldiv) {
            scrolldiv.addEventListener('scroll', this.loadMoreData.bind(this));
        }
    }

    /**
     * @ignore
     */
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

    /**
     * This method process and bind the data according to currently selected filters.
     *  @param {DataStateChangeEvent} event selected grid state.
     */
    dataStateChange(event: DataStateChangeEvent) {
        this.state = event;
        // this.gridService.query(event);
        this.gridDataResult = process(this.data, this.state);
    }

    /**
     * This method returns all data for the excel export.
     * @returns {ExcelExportData} Grid data.
     */
    allData(): ExcelExportData {
        const result: ExcelExportData = {
            data: this.data,
            group: this.state.group,
        };
        return result;
    }

    /**
     * This method refresh the grid.
     */
    refreshGrid() {
        this.state.skip = 0;
        // this.gridService.query({});
        this.gridDataResult = process(this.data, this.state);
        this.selectedKeys = [];
    }

    /**
     * This method current selected row data item.
     *  @param {object} e selected data item.
     * @returns Selected row.
     */
    selectBy(e) {
        return e.dataItem;
    }

    /**
     * This method emits the selection change event.
     */
    onSelectionChange(e) {
        this.selectedRowIndex = e.selectedRows.length ? e.index : undefined;
        this.selectionChange.emit({ selectedRows: e.selectedRows, selectedRowIdx: e.index });
    }

    /**
     * This method emits the viewDetail event.
     * @param {object} item selected data item.
     */
    onViewDetail(item: { dataItem }) {
        this.viewDetail.emit(item);
    }

    /**
     * This method is used to call save as pdf method of grid.
     */
    exportAsPdf() {
        this.grid.saveAsPDF();
    }

    /**
     * This method is used to call save as excel method of grid.
     */
    exportAsExcel() {
        this.grid.saveAsExcel();
    }

    /**
     * @ignore
     */
    ngOnDestroy() {
        this.gridServiceSubscription.unsubscribe();
    }
}
