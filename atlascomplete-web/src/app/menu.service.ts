import { Injectable } from '@angular/core';
import { IMenuItem } from 'atlas-web-components';
import { DataAccessFactory, DataAccessService } from 'atlas-web-services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
