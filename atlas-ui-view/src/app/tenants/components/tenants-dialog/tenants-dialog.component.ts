import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-tenants-dialog',
    templateUrl: './tenants-dialog.component.html',
    styles: [
        'input[type=text] { width: 100%; }'
    ]
})
export class TenantsDialogFormComponent {
    editForm: FormGroup = new FormGroup({
        'TenantTaxnmyName': new FormControl('', Validators.required),
        'EfctvStartDt': new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
        'EfctvEndDt': new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
        'RootDomain': new FormControl('', Validators.required)
    });

    @Input() public set model(obj) {
        this.editForm.reset(obj);
    }
}
