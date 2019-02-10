import { Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material';
import { AtlasUploadService } from 'projects/atlas-web-components/src/lib/atlas-upload/services/atlas-upload.service';
@Component({
    selector: 'atlas-button-test',
    templateUrl: './atlas-button-test.component.html',
    styleUrls: ['./atlas-button-test.component.scss'],
    providers: [AtlasUploadService],
})
export class AtlasButtonTestComponent implements OnInit {
    constructor(private uploadDialogService: AtlasUploadService) {}

    ngOnInit() {}

    onClickHandler() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.width = '600px';
        dialogConfig.height = '300px';
        dialogConfig.closeOnNavigation = true;
        dialogConfig.panelClass = 'custom-dialog-container';

        this.uploadDialogService
            .show(
                'Upload Reference Data',
                dialogConfig,
                {
                    uploadRestrictions: { allowedExtensions: [] },
                    autoUpload: false,
                    multiple: true,
                },
                null,
                null
            )
            .subscribe((result) => {
                console.log(result);
            });
    }
}
