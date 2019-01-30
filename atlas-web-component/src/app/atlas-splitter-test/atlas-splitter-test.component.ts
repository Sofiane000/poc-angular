import { Component, OnInit } from '@angular/core';
import { ISplitter } from 'projects/atlas-web-components/src/lib/atlas-splitter/components/splitter';

@Component({
    selector: 'atlas-splitter-test',
    templateUrl: './atlas-splitter-test.component.html',
    styleUrls: ['./atlas-splitter-test.component.scss'],
})
export class AtlasSplitterTestComponent implements OnInit {
    leftPaneSetting: ISplitter = {
        collapsible: false,
        size: '30%',
        resizable: true,
    };
    rightPaneSetting: ISplitter = {
        collapsible: false,
        size: null,
        resizable: true,
    };

    constructor() {}

    ngOnInit() {}
}
