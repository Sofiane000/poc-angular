import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
const noop = () => {};
@Component({
    selector: 'atlas-select',
    templateUrl: './atlas-select.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AtlasSelectComponent),
            multi: true,
        },
    ],
})
export class AtlasSelectComponent implements ControlValueAccessor {
    @Input()
    placeHolder: string;
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
    values: any[] = [];
    @Input()
    showError: boolean;
    @Input()
    required: boolean;
    @Input()
    disableSelect: boolean;
    @Input()
    isMultiple: boolean;
    @Input()
    disableRipple: boolean;
    innerValue: any;
    @Output()
    blur: EventEmitter<any> = new EventEmitter();

    // From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    onBlurHandler(event) {
        this.blur.emit(event);
        this.onTouchedCallback();
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
