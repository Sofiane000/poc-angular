import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { IColumnSetting } from '../models/grid-column-setting';
import { State, process, GroupDescriptor } from '@progress/kendo-data-query';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { AtlasGridService } from '../services/atlas-grid.service';
import { Subscription } from 'rxjs';
import { DialogService, DialogRef, DialogCloseResult } from '@progress/kendo-angular-dialog';
import { AtlasDialogService } from '../../atlas-dialog/services/atlas-dialog.service';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';

@Component({
  selector: 'atlas-grid',
  templateUrl: './atlas-grid.component.html',
  styleUrls: ['./atlas-grid.component.css'],
  providers: [AtlasDialogService]
})
export class AtlasGridComponent implements OnInit, OnDestroy {
  data: any[];
  showAddModel: boolean;
  selectedRowIndex: number;
  baseUrl = window.location.href;
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
  @Input() height: string;
  @Input() isLoading: boolean;
  @Input() gridService: AtlasGridService;
  @Input() selectable: any;
  @Input() showSelectAll: boolean;
  @Input() editDataItem: any;
  @Input() isEditable: boolean;
  @Input()
  selectedKeys: any[];
  @Input()
  gridDataResult: GridDataResult;
  @Output() add: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewDetail: EventEmitter<any> = new EventEmitter<any>();

  private gridServiceSubscription: Subscription;
  constructor(private dialogService: AtlasDialogService) {
    this.allData = this.allData.bind(this);
  }

  ngOnInit() {
    this.gridService.query(this.state);
    this.gridServiceSubscription = this.gridService.subscribe(response => {
      if (response) {
        this.data = response;
        this.gridDataResult = process(this.data, this.state);
      }
    });

  }

  dataStateChange(event: DataStateChangeEvent) {
    this.state = event;
    this.gridService.query(event);
  }
  allData(): ExcelExportData {
    const result: ExcelExportData = {
      data: this.data,
      group: this.state.group
    };
    return result;
  }

  refreshGrid() {
    this.state.skip = 0;
    this.gridService.query(this.state);
    this.gridDataResult = process(this.data, this.state);
    this.selectedKeys = [];
  }
  removeDataItem() {
    this.remove.emit(this.selectedKeys[0]);
  }
  selectBy(e) {
    return e.dataItem;
  }
  onSelectionChange(e) {
    this.selectedRowIndex = e.selectedRows.length ? e.index : undefined;
  }
  onAdd(event) {
    this.add.emit({});
  }
  onViewDetail({ dataItem }) {
    this.viewDetail.emit({ dataItem });
  }
  onRemove({ dataItem }) {
    this.remove.emit({ dataItem });
  }
  editSelectedRow() {
    this.edit.emit(this.selectedKeys[0]);
  }
  ngOnDestroy() {
    this.gridServiceSubscription.unsubscribe();
  }
}
