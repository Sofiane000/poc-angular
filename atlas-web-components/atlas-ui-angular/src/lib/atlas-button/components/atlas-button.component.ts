import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'atlas-button',
  templateUrl: './atlas-button.component.html',
  styleUrls: ['./atlas-button.component.scss']
})
export class AtlasButtonComponent implements OnInit {
  @Input() text = 'Button';
  @Input() isDisabled: boolean;
  @Output() btnClick: EventEmitter<{}> = new EventEmitter<{}>();
  @Input() iconValue: string;
  @Input() iconClass: string;
  @Input() imageUrl: string;
  @Input() primary: boolean;
  @Input() look: string;
  @Input() toggleable: boolean;
  @Input() buttonColor: string;
  @Output() selectionChange: EventEmitter<{}> = new EventEmitter<{}>();
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(event) {
    this.btnClick.emit({});
  }

  onSelectedChange(event) {
    this.selectionChange.emit(event);
  }
  onFocus(event) {
    this.focus.emit(event);
  }
  onBlur(event) {
    this.blur.emit(event);
  }
}
