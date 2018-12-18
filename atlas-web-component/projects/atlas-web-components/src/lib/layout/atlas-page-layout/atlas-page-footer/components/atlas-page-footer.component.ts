import { Component, Input } from '@angular/core';
import { routerTransition } from '../../../../atlas-content/animations/animation';
@Component({
    selector: 'atlas-page-footer',
    templateUrl: './atlas-page-footer.component.html',
    styleUrls: ['./atlas-page-footer.component.scss'],
    animations: [routerTransition],
    // tslint:disable-next-line:use-host-property-decorator
    host: { '[@routerTransition]': '' },
})
export class AtlasPageFooterComponent {
    @Input() canSave = false;
    @Input() showNumRecords = false;
    @Input() showNavigation = false;
    @Input() totalRecords = 100;
}
