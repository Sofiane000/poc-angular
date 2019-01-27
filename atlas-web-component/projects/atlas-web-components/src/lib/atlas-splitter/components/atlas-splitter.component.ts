import { Component, Input, OnInit } from '@angular/core';
import { ISplitter } from './splitter';

@Component({
    selector: 'atlas-splitter',
    templateUrl: './atlas-splitter.component.html',
    styleUrls: ['./atlas-splitter.component.scss'],
})
export class AtlasSplitterComponent implements OnInit {
    @Input()
    leftPaneSetting: ISplitter;

    @Input()
    rightPaneSetting: ISplitter;

    @Input()
    splitterStyle: any;

    @Input()
    orientation: any;

    constructor() {}

    ngOnInit() {}
}
