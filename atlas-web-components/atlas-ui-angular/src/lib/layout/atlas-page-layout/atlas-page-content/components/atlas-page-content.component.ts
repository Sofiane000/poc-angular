import { Component, Input } from '@angular/core';
import { routerTransition } from '../../../../atlas-content/animations/animation';
@Component({
    selector: 'atlas-page-content',
    templateUrl: './atlas-page-content.component.html',
    styleUrls: ['./atlas-page-content.component.scss'],
    animations: [routerTransition],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@routerTransition]': '' },
})
export class AtlasPageContentComponent {
    @Input()
    type: string;
}
