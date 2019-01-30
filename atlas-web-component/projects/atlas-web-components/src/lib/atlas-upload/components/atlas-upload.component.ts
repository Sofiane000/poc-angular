import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    ClearEvent,
    FileInfo,
    FileRestrictions,
    RemoveEvent,
    SelectEvent,
} from '@progress/kendo-angular-upload';

@Component({
    selector: 'atlas-upload',
    templateUrl: './atlas-upload.component.html',
    styleUrls: ['./atlas-upload.component.scss'],
})
export class AtlasUploadComponent implements OnInit {
    @Input()
    uploadRestrictions: FileRestrictions = {
        allowedExtensions: ['.jpg', '.png'],
    };

    @Input()
    uploadSaveUrl: any; // should represent an actual API endpoint

    @Input()
    multiple: any;

    @Input()
    batch: any;

    @Input()
    uploadRemoveUrl: any; // should represent an actual API endpoint

    @Input()
    files: FileInfo[];

    @Input()
    disabled: boolean;

    @Input()
    autoUpload: boolean;

    @Output()
    clear: EventEmitter<ClearEvent> = new EventEmitter<ClearEvent>();

    @Output()
    complete: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    remove: EventEmitter<RemoveEvent> = new EventEmitter<RemoveEvent>();

    @Output()
    select: EventEmitter<SelectEvent> = new EventEmitter<SelectEvent>();

    ngOnInit(): void {}

    clearEventHandler(e: ClearEvent): void {
        this.clear.emit(e);
    }

    completeEventHandler(e: any) {
        this.complete.emit(e);
    }

    removeEventHandler(e: RemoveEvent): void {
        this.remove.emit(e);
    }

    selectEventHandler(e: SelectEvent): void {
        this.select.emit(e);
    }
}
