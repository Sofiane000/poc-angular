import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AtlasMultiselectComponent } from 'projects/atlas-web-components/src/lib/atlas-dropdown/components/atlas-multiselect/atlas-multiselect.component';
import { from } from 'rxjs';
import { delay, map, switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'atlas-multiselect-test',
    templateUrl: './atlas-multiselect-test.component.html',
    styleUrls: ['./atlas-multiselect-test.component.scss'],
})
export class AtlasMultiSelectTestComponent implements OnInit, AfterViewInit {
    public events: string[] = [];
    public source: string[] = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
    public data: string[];
    selectvalue;
    @ViewChild(AtlasMultiselectComponent)
    multiSelect: AtlasMultiselectComponent;
    isFilterable: boolean;
    isPlaceHolder: boolean;
    placeHolder: string;
    showSummary: boolean;
    isAutoClose: boolean;
    showClear: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;

    constructor() {}

    ngOnInit() {
        this.data = this.source.slice();
    }

    ngAfterViewInit() {
        const contains = (value) => (s) => s.toLowerCase().indexOf(value.toLowerCase()) !== -1;

        this.multiSelect.list.filterChange
            .asObservable()
            .pipe(
                switchMap((value) =>
                    from([this.source]).pipe(
                        tap(() => (this.multiSelect.list.loading = true)),
                        delay(1000),
                        map((data) => data.filter(contains(value)))
                    )
                )
            )
            .subscribe((x) => {
                this.data = x;
                this.multiSelect.list.loading = false;
            });
    }

    valueChangeHandler(value) {
        console.log(value);
    }

    placeHolderChange(event) {
        this.placeHolder = event ? 'Pllease select a value' : '';
    }
}
