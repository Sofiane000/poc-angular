import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'atlas-input-test',
    templateUrl: './atlas-input-test.component.html',
    styleUrls: ['./atlas-input-test.component.scss'],
})
export class AtlasInputTestComponent implements OnInit {
    editForm: FormGroup = new FormGroup({
      CustomBtn: new FormControl('', Validators.required),
    });
    constructor() {}

    ngOnInit() {}
}
