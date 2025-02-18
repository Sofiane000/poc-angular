import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'atlas-doc-viewer-test',
    templateUrl: './atlas-doc-viewer-test.component.html',
    styleUrls: ['./atlas-doc-viewer-test.component.scss'],
})
export class AtlasDocViewerTestComponent implements OnInit {
    src: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.src = params.documentId ? '/assets/' + params.documentId : void 0;
        });
    }
}
