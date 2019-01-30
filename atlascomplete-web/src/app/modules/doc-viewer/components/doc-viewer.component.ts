import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-doc-viewer',
    templateUrl: 'doc-viewer.component.html',
})
export class DocumentViewerComponent implements OnInit {
    src: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.src = params.documentId ? '/assets/' + params.documentId : void 0;
        });
    }
}
