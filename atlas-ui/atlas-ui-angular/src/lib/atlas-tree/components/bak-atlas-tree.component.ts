import {
  Component, OnInit, ViewChild, Input,
  AfterViewInit, OnDestroy, ElementRef, NgZone,
  ViewEncapsulation, ChangeDetectionStrategy
} from '@angular/core';
import { ContextMenuComponent } from '@progress/kendo-angular-menu';
declare var kendo: any;
@Component({
  selector: 'bakatlas-tree',
  templateUrl: './bak-atlas-tree.component.html',
  styleUrls: ['./bak-atlas-tree.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BakAtlasTreeComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() options: any;
  @Input() treeViewOptions: any;
  @Input() filterBy: any;
  @Input() isFilterable: boolean;
  @Input() isEditable: boolean;
  @Input() menuItems: any[];
  @Input() showToolbar: boolean;
  @Input() showRefresh: boolean;
  @ViewChild('treeView')
  treeView: ElementRef;
  @ViewChild('treemenu')
  public gridContextMenu: ContextMenuComponent;


  filterValue: string;
  private _treeView: any;
  contextItem: any;

  constructor(private zone: NgZone, private elementRef: ElementRef) { }

  ngOnInit() {
    const dataSource = new kendo.data.TreeListDataSource(this.options);

    this.treeViewOptions.dataSource = dataSource;
  }

  ngAfterViewInit() {
    const treeList = kendo.jQuery(this.treeView.nativeElement);
    this.zone.runOutsideAngular(() => {
      this._treeView = treeList
        .kendoTreeList(this.treeViewOptions)
        .data('kendoTreeList');
    });
  }

  ngOnDestroy(): void {
    kendo.destroy(this.elementRef.nativeElement);
  }

  get dataSource(): any {
    return this._treeView && this._treeView.dataSource;
  }

  get content(): JQuery {
    return this._treeView && this._treeView.content;
  }

  get thead(): JQuery {
    return this._treeView && this._treeView.thead;
  }

  get tbody(): JQuery {
    return this._treeView && this._treeView.tbody;
  }

  addClicked(event) {
    event.preventDefault();
    this.gridContextMenu.show({ left: event.pageX, top: event.pageY });
  }
  onSelect({ item }): void {
    if (item.text === 'Add Sibling') {
      this.addSibling();
    } else {
      this.addChild();
    }
  }

  addSibling() {
    // to do
    this.addRow();
  }

  addChild() {
    const dataItem = this._treeView.select();
    if (dataItem.length > 0) {
      this.addRow(dataItem);
    } else {
      this.addRow();
    }
  }
  refreshTree() {
    this.dataSource.read();
  }
  editSelectedRow() {
    const dataItem = this._treeView.select();
    if (dataItem.length > 0) {
      this.editRow(dataItem);
    }
  }
  removeSelectedRow() {
    const dataItem = this._treeView.select();
    if (dataItem.length > 0) {
      this._treeView.removeRow(dataItem);
    }
  }
  onFilterSubmit() {
    if (this.filterValue) {
      this._treeView.dataSource.filter({
        field: this.filterBy,
        operator: 'contains',
        value: this.filterValue
      });
    } else {
      this._treeView.dataSource.filter({});
    }
  }
  public addRow(parentRow: string | Element | JQuery = ''): void {
    return this._treeView && this._treeView.addRow(parentRow);
  }

  public editRow(row: string | JQuery): void {
    if (!row) {
      return;
    }

    const internalRow = row instanceof jQuery ? row : kendo.jQuery(row);
    return this._treeView && this._treeView.editRow(internalRow);
  }

  public removeRow(row: string | Element | JQuery): void {
    if (!row) {
      return;
    }

    const internalRow = row instanceof jQuery ? row : kendo.jQuery(row);
    return this._treeView && this._treeView.removeRow(internalRow);
  }

  public expand(row: string | Element | JQuery): void {
    if (!row) {
      return;
    }

    const internalRow = row instanceof jQuery ? row : kendo.jQuery(row);
    return this._treeView && this._treeView.expand(internalRow);
  }

  public select(row: string | Element | JQuery): JQuery {
    if (!row) {
      return;
    }

    const internalRow = row instanceof jQuery ? row : kendo.jQuery(row);
    return this._treeView && this._treeView.select(internalRow);
  }

  public itemFor(model: kendo.data.TreeListModel | Object): JQuery {
    if (!model) {
      return;
    }

    return this._treeView && this._treeView.itemFor(model);
  }

  public dataItem(row: string | Element | JQuery): kendo.data.TreeListModel {
    if (!row) {
      return;
    }

    const internalRow = row instanceof jQuery ? row : kendo.jQuery(row);
    return this._treeView && this._treeView.dataItem(internalRow);
  }

  public clearSelection(): void {
    return this._treeView && this._treeView.clearSelection();
  }
}
