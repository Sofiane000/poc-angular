import { EventEmitter, Injectable } from '@angular/core';

export class ComponentSecurity {
    cmpntSK: number;
    cmpntId: string;
    canRead: boolean;
    canCreate: boolean;
    canModify: boolean;
    canDelete: boolean;
    canExecute: boolean;
    isMasked: boolean;
}

// tslint:disable-next-line:max-classes-per-file
@Injectable({
    providedIn: 'root',
})
export class ComponentSecurityService {
    public securityChanged: EventEmitter<void> = new EventEmitter();
    private securityMap: Map<string, ComponentSecurity> = new Map<string, ComponentSecurity>();
    private readonly openComponent: ComponentSecurity = {
        cmpntSK: -1,
        cmpntId: '',
        canRead: true,
        canCreate: true,
        canModify: true,
        canDelete: true,
        canExecute: true,
        isMasked: false,
    };

    public getSecurity(componentId: string): ComponentSecurity {
        let security = this.securityMap.get(componentId);
        if (!security) {
            // if component is not available in store - tread as wide-open
            security = this.openComponent;
        }
        return security;
    }

    public loadSecurityMap(components: any[]): void {
        this.securityMap.clear();
        components.forEach((component) => {
            this.securityMap.set(component.cf_CmpntID, {
                cmpntSK: component.CmpntSK,
                cmpntId: component.cf_CmpntID,
                canRead: component.PermisnRead,
                canCreate: component.PermisnCreate,
                canModify: component.PermisnModify,
                canDelete: component.PermisnDel,
                canExecute: component.PermisnExec,
                isMasked: component.PermisnMask,
            });
        });
        this.securityChanged.emit(void 0);
    }
}
