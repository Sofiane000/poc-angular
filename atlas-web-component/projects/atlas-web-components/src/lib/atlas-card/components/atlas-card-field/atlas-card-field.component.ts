import { Component, OnInit, Input } from '@angular/core';
import { ICardField } from '../../models/card-field';

@Component({
    selector: 'atlas-card-field',
    templateUrl: './atlas-card-field.component.html',
    styleUrls: ['./atlas-card-field.component.scss'],
})
export class AtlasCardFieldComponent implements OnInit {
    @Input()
    field: ICardField;
    constructor() {}

    ngOnInit() {}
}
