import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
@Component({
    selector: 'atlas-card',
    templateUrl: './atlas-card.component.html',
    styleUrls: ['./atlas-card.component.scss'],
})
export class AtlasCardComponent implements OnInit {
    @Input()
    cardItems: any[];
    @ContentChild('cardTemplate')
    cardTemplate: TemplateRef<any>;
    
  constructor() {}

    ngOnInit() {}
}
