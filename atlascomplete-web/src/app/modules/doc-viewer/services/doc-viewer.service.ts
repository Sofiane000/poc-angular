import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class DocumentViewerService {
    constructor(private router: Router) {}

    /**
     * Use this method to show documents
     */
    showDocument(documentId: string): void {
        this.router.navigate([
            {
                outlets: {
                    sidebar: ['document', { documentId: documentId }],
                },
            },
        ]);
    }
}
