
import { Component, Input } from '@angular/core';
@Component({
    selector: 'atlas-page-header',
    templateUrl: './atlas-page-header.component.html',
    styleUrls: ['./atlas-page-header.component.css']
})
export class AtlasPageHeaderComponent {
    @Input()
    backGroundColor: string;
    @Input()
    fontSize: string;
    @Input()
    textAlign: string;
    @Input()
    title: string;
    @Input()
    color: string;
}
