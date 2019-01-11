import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'atlas-multiselect',
    templateUrl: './atlas-multiselect.component.html',
    styleUrls: ['./atlas-multiselect.component.scss'],
    providers: [],
})
export class AtlasMultiselectComponent implements OnInit {
    @ViewChild('list') list;

    // get accessor
    get value(): any {
        return this.innerValue;
    }

    // set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
        }
    }

    /**
     * Data for the multi select dropdown
     */
    @Input()
    listItems: any[];

    /**
     * Text for label.
     */
    @Input()
    labelText: string;

    /**
     * Sets the data item field that represents the item text. If the data contains only primitive values, do not define it.
     */
    @Input()
    textField: string;

    /**
     * Sets the data item field that represents the item value. If the data contains only primitive values, do not define it.
     */
    @Input()
    valueField: string;

    /**
     * The hint which is displayed when the component is empty. When the values are selected, it disappears.
     */
    @Input()
    placeholder: any;

    /**
     * Specifies the type of the selected value. If set to true, the selected value has to be of the primitive type.
     */
    @Input()
    valuePrimitive: boolean;

    /**
     * Determines whether to close the options list of the MultiSelect after the item selection is finished.
     */
    @Input()
    autoClose = true;

    /**
     * If set to true, renders a button on hovering over the component.
     * Clicking this button resets the value of the component to an empty array and triggers the change event.
     */
    @Input()
    clearButton: boolean;

    /**
     * Sets the disabled state of the component.
     */
    @Input()
    disabled: boolean;

    /**
     * Sets and gets the loading state of the MultiSelect.
     */
    @Input()
    loading: boolean;

    /**
     * Sets the read-only state of the component.
     */
    @Input()
    readonly: boolean;

    /**
     * Enables the filtering functionality of the MultiSelect.
     */
    @Input()
    filterable: boolean;

    /**
     * If set to true shows the summary tag.
     */
    @Input()
    showSummary: boolean;

    /**
     * Number of selected value after which summary will appear
     */
    @Input()
    summaryValue: any;

    /**
     * Configures the popup of the MultiSelect.

        The available options are:

        animate: Boolean—Controls the popup animation. By default, the open and close animations are enabled.
        width: Number—Sets the width of the popup container. By default, the width of the host element is used.
        height: Number—Sets the height of the popup container.
        popupClass: String—Specifies a list of CSS classes that are used to style the popup.
        appendTo: "root" | "component" | ViewContainerRef—Specifies the component to which the popup will be appended.
    */
    @Input()
    popupSettings: any;

    /**
     * Sets the height of the suggestions list. By default, listHeight is 200px.
     */
    @Input()
    listHeight: any;

    @Output()
    valueChange: EventEmitter<any> = new EventEmitter<any>();

    // The internal data model
    private innerValue: any[] = [];

    constructor() {}

    ngOnInit() {}

    valueChangeHandler(value: any) {
        this.valueChange.emit(value);
    }
}
