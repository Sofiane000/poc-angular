import { Injectable } from '@angular/core';
import { DataAccessService, DataAccessFactory } from 'atlas-web-services';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IMenuItem } from 'atlas-web-components';
@Injectable({
    providedIn: 'root',
})
export class MenuService {
    dataAccess: DataAccessService;

    constructor(dataAccessFactory: DataAccessFactory) {
        this.dataAccess = dataAccessFactory.getService('idm.menus');
    }
    getMenuItems(): Observable<IMenuItem[]> {
        return this.dataAccess.get().pipe(
            map((response) => {
                return response.body.data;
            })
        );
    }
}
