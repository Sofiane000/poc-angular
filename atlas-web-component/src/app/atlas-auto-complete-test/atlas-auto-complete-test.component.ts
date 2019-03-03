import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogConfig } from '@angular/material';
import { AtlasAutoCompleteComponent } from 'projects/atlas-web-components/src/lib/atlas-auto-complete/components/atlas-auto-complete.component';
import { AtlasUploadService } from 'projects/atlas-web-components/src/lib/atlas-upload/services/atlas-upload.service';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap, take } from 'rxjs/operators';
@Component({
    selector: 'atlas-auto-complete-test',
    templateUrl: './atlas-auto-complete-test.component.html',
})
export class AtlasAutoCompleteTestComponent implements OnInit {
    @ViewChild(AtlasAutoCompleteComponent) autoComplete: AtlasAutoCompleteComponent;
    filteredOptions: Observable<any[]>;
    myControl = new FormControl();

    constructor() {}

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(null),
            debounceTime(200),
            distinctUntilChanged(),
            switchMap((val) => {
                if (val) {
                    return this.filter(val || '');
                } else {
                    return of([]).pipe(take(1));
                }
            })
        );
    }

    filter(val: string): Observable<any[]> {
        const list = [
            { key: 'volvo', value: 'Volvo' },
            { key: 'saab', value: 'Saab' },
            { key: 'mercedes', value: 'Mercedes' },
        ];
        list.filter((e) => e.key === val);
        return of(list.filter((e) => e.key === val));
    }
}
