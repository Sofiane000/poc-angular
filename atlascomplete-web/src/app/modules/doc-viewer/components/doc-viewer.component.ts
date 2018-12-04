import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-doc-viewer',
    templateUrl: 'doc-viewer.component.html',
    styleUrls: ['doc-viewer.component.scss'],
})
export class DocumentViewerComponent implements OnInit {
    src: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if (params.documentId) {
                this.src = '/assets/' + params.documentId;
            } else {
                this.src = void 0;
            }
        });
    }
}
