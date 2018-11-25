import { Component, Input } from '@angular/core';
@Component({
    selector: 'atlas-page-footer',
    templateUrl: './atlas-page-footer.component.html',
    styleUrls: ['./atlas-page-footer.component.scss']
})
export class AtlasPageFooterComponent {
    @Input() canSave = false;
    @Input() showNumRecords = false;
    @Input() showNavigation = false;
    @Input() totalRecords = 100;
}
