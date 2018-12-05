
import { Component } from '@angular/core';
import { routerTransition } from '../animations/animation';
@Component({
    selector: 'atlas-content',
    templateUrl: './atlas-content.component.html',
    styleUrls: ['./atlas-content.component.scss'],
    animations: [routerTransition]
})
export class AtlasContentComponent {
}
