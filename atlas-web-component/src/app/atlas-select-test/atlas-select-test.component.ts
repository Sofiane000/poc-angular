import { Component, OnInit } from '@angular/core';
import { IAtlasSelectModel } from 'projects/atlas-web-components/src/lib/atlas-select/models/atlas-select';
@Component({
    selector: 'atlas-select-test',
    templateUrl: './atlas-select-test.component.html',
    styles: [
        `
            .example-config {
                margin-top: 20px;
            }
        `,
    ],
})
export class AtlasSelectTestComponent implements OnInit {
    constructor() {}
    cars: IAtlasSelectModel[] = [
        { key: 'volvo', value: 'Volvo' },
        { key: 'saab', value: 'Saab' },
        { key: 'mercedes', value: 'Mercedes' },
    ];
    selectedValue: any;

    ngOnInit() {}
}
