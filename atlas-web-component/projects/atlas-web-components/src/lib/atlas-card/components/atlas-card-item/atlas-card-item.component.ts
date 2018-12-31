import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { ICardField } from '../../models/card-field';

@Component({
    selector: 'atlas-card-item',
    templateUrl: './atlas-card-item.component.html',
    styleUrls: ['./atlas-card-item.component.scss'],
})
export class AtlasCardItemComponent implements OnInit {
    @Input()
    title: string;
    @ContentChild('fieldTemplate')
    fieldTemplate: TemplateRef<any>;
    @Input()
    primaryFields: ICardField[];
    @Input()
    secondaryFields: ICardField[];
    
  constructor() {}

    ngOnInit() {}
}
