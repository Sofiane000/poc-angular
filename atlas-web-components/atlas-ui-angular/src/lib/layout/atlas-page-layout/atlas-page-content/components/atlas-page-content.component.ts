
import { Component, Input } from '@angular/core';
@Component({
    selector: 'atlas-page-content',
    templateUrl: './atlas-page-content.component.html',
    styleUrls: ['./atlas-page-content.component.scss']
})
export class AtlasPageContentComponent {
    @Input()
    type: string;
}
