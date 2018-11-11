import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-edit-dialog-tree',
    templateUrl: './edit-dialog-tree.component.html',
    styles: [
        'input[type=text] { width: 100%; }'
    ]
})
export class EditDialogTreeFormComponent {
    editForm: FormGroup = new FormGroup({
        'TenantTaxnmyName': new FormControl('',Validators.required),
        'EfctvStartDt': new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
        'EfctvEndDt': new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
        'RootDomain': new FormControl('', Validators.required)
    });

    @Input() public set model(obj) {
        this.editForm.reset(obj);
    }
}
