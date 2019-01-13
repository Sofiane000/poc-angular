import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IntlService } from '@progress/kendo-angular-intl';

@Component({
    selector: 'atlas-date-picker-test',
    templateUrl: './atlas-date-picker-test.component.html',
    styleUrls: ['./atlas-date-picker-test.component.scss'],
})
export class AtlasDatePickerTestComponent implements OnInit {
    dateValue: Date = new Date();
    events: any[] = [];
    showNavigation = true;
    isDisabled: boolean;
    isReadonly: boolean;
    showWeeknumber: boolean;
    min: Date = new Date(2019, 1, 2);
    max: Date = new Date(2019, 12, 31);
    dateFormValue = new FormControl(new Date());

    constructor(private intl: IntlService) {}

    ngOnInit() {}

    onBlur(event) {
        this.log('blur');
    }

    onOpen(event) {
        this.log('open');
    }

    onClose(event) {
        this.log('close');
    }

    onFocus(event) {
        this.log('focus');
    }

    onChange(value: Date) {
        this.log('change', value);
    }

    private log(event: string, value?: Date): void {
        this.events = [`${event}${this.formatValue(value)}`].concat(this.events);
    }

    private formatValue(value?: Date): string {
        return value ? ` - ${this.intl.formatDate(value, 'd')}` : '';
    }
}
