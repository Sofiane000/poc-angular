import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
const noop = () => {};
@Component({
    selector: 'atlas-auto-complete',
    templateUrl: './atlas-auto-complete.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AtlasAutoCompleteComponent),
            multi: true,
        },
    ],
})
export class AtlasAutoCompleteComponent implements OnInit, ControlValueAccessor {
    // The internal data model
    private innerValue: any = '';

    // Placeholders for the callbacks which are later provided
    // by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    // get accessor
    get value(): any {
        return this.innerValue;
    }

    // set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    @Input()
    filteredOptions: Observable<any[]>;
    @Input()
    placeholder: any;

    @Output()
    optionSelected: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    onSelectionChanged(event) {
        this.optionSelected.emit(event);
    }

    // From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    // From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    // From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }
}
