import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AtlasInputComponent),
    multi: true,
};

@Component({
    selector: 'atlas-input',
    templateUrl: './atlas-input.component.html',
    styleUrls: ['./atlas-input.component.scss'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class AtlasInputComponent implements OnInit, ControlValueAccessor {
    @Input() showHint: boolean;
    @Input() hintText: string;
    @Input() showCloseIcon = true;
    @Input() floatLabel = 'auto';
    @Input() width: any;
    @Input() type = 'text';
    @Input() placeHolder: string;
    @Input() disabled: boolean;
    @Input() readonly: boolean;
    @Input() required: boolean;
    @Input() label: string;
    @Input() appearance: string;
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

    // Set touched on blur
    onBlur() {
        this.onTouchedCallback();
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
    
  ngOnInit(): void {}
}
