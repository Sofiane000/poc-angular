import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'atlas-button-test',
    templateUrl: './atlas-button-test.component.html',
    styleUrls: ['./atlas-button-test.component.scss'],
})
export class AtlasButtonTestComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
    onClickHandler() {
        alert('Button clicked');
    }
}
