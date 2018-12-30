import { Component, Input } from '@angular/core';

@Component({
    selector: 'atlas-doc-viewer',
    templateUrl: './atlas-doc-viewer.component.html',
    styleUrls: ['./atlas-doc-viewer.component.scss'],
})
export class AtlasDocViewerComponent {
    @Input() src;
}
