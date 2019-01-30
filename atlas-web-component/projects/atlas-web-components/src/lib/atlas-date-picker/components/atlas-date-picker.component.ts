import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PopupSettings } from '@progress/kendo-angular-dropdowns';

const noop = () => {};

@Component({
    selector: 'atlas-date-picker',
    templateUrl: './atlas-date-picker.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AtlasDatePickerComponent),
            multi: true,
        },
    ],
})
export class AtlasDatePickerComponent implements OnInit, ControlValueAccessor {
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

    @Input()
    // set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    /**
     * Sets or gets the disabled property of the DatePicker and determines whether the component is active
     */
    @Input()
    disabled: boolean;

    /**
     * Sets or gets the readonly property of the DatePicker
     */
    @Input()
    readOnly: boolean;

    /**
     * Specifies the focused date of the Calendar component
     */
    @Input()
    focusedDate: Date = new Date();

    /**
     * Specifies the smallest valid date
     */
    @Input()
    min: Date;

    /**
     * Specifies the biggest valid date
     */
    @Input()
    max: Date;

    /**
     * Specifies the label
     */
    @Input()
    floatingLabel: string;

    /**
     * Specifies width
     */
    @Input()
    width: string;

    /**
     * Sets or gets the navigation property of the Calendar and determines whether the navigation side-bar is displayed.
     */
    @Input()
    navigation: boolean;

    /**
     * Specifies the date format that is used to display the input value
     */
    @Input()
    format: boolean;

    /**
     * Specifies the hint the DatePicker displays when its value is null
     */
    @Input()
    placeholder: string;

    /**
     * Defines the descriptions of the format sections in the input field.
     * @example @Component({
        selector: 'my-app',
        template: `
        <div class="row example-wrapper" style="min-height: 450px;">
        <div class="col-xs-12 col-md-6 example-col">
          <p>Full-length format description:</p>
          <kendo-datepicker formatPlaceholder="wide"></kendo-datepicker>
        </div>

        <div class="col-xs-12 col-md-6 example-col">
          <p>Narrow-length format description:</p>
          <kendo-datepicker formatPlaceholder="narrow"></kendo-datepicker>
        </div>

        <div class="col-xs-12 col-md-6 example-col">
          <p>Short-length format description:</p>
          <kendo-datepicker formatPlaceholder="short"></kendo-datepicker>
        </div>

        <div class="col-xs-12 col-md-6 example-col">
          <p>Display defined format:</p>
          <kendo-datepicker format="MM/dd/yyyy" formatPlaceholder="formatPattern"></kendo-datepicker>
        </div>

        <div class="col-xs-12 col-md-6 example-col">
          <p>Custom defined format descriptions</p>
          <kendo-datepicker format="MM/dd/yyyy"
            [formatPlaceholder]="{ year: 'y', month: 'M', day: 'd' }"
          ></kendo-datepicker>
        </div>
        </div>
        `
        })
        class AppComponent { }
     */
    @Input()
    formatPlaceholder: string;

    /**
    * Defines the active view that the Calendar initially renders (see the basic usage example). By default, the active view is month.

      You have to set activeView within the topView-bottomView range.
      The CalendarView type defines the following possible view options:

      month—Shows the days of the month.
      year—Shows the months of the year.
      decade;Shows the years of the decade.
      century—Shows the decades of the century.
   */

    @Input()
    activeView = 'month';

    /**
     * Defines the topmost Calendar view, to which the user can navigate
     */
    @Input()
    topView: string;

    /**
     * Defines the bottommost Calendar view, to which the user can navigate
     */
    @Input()
    bottomView: string;

    @Input()
    weekNumber: boolean;

    @Input()
    popupSettings: PopupSettings;
    @Output()
    blur: EventEmitter<any> = new EventEmitter();
    @Output()
    focus: EventEmitter<any> = new EventEmitter();
    @Output()
    open: EventEmitter<any> = new EventEmitter();
    @Output()
    close: EventEmitter<any> = new EventEmitter();
    @Output()
    valueChange: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    /**
     * Method gets fired when datepicker lost focus.
     * @param event
     */
    onBlur(event: any) {
        this.blur.emit(event);
        this.onTouchedCallback();
    }

    /**
     * Method gets fired when datepicker is focused.
     * @param event
     */
    onFocus(event: any) {
        this.focus.emit(event);
    }

    /**
     *Method gets fired when datepicker is opened.
     * @param event Close event.
     */
    onOpen(event: any) {
        this.open.emit(event);
    }

    /**
     * Method gets fired when datepicker is closed.
     * @param event Close event.
     */
    onClose(event: any) {
        this.close.emit(event);
    }

    /**
     * Method gets fired when value is changed.
     * @param event Updated value
     */
    onChange(event: any) {
        this.valueChange.emit(event);
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
