import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';

import {
    AtlasRequestParams,
    AtlasSort,
    AtlasSortDirection,
    DataAccessFactory,
    DataAccessService,
} from '@atlas/web-services';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserService extends AtlasGridService {
    selectedUser: any;
    dataAccess: DataAccessService;
    saveSubject: Subject<any> = new Subject<any>();

    constructor(dataAccessFactory: DataAccessFactory) {
        super();
        this.dataAccess = dataAccessFactory.getService('idm.users');
    }

    query(state: any): void {
        this.fetch(state).subscribe((x) => super.next(x));
    }

    fetch(state: any): Observable<any> {
        this.isLoading = true;
        return this.getUsers(state).pipe(tap(() => (this.isLoading = false)));
    }

    /*getUsers() {
        return this.dataAccess.get('', { pageSize: 2, restartRowId: '1' }).pipe(
            map((response) => {
                // restart row is in response.restartRowId
                return response.body.data;
            })
        );
    }*/

    getUsers(state) {
        const params: AtlasRequestParams = new AtlasRequestParams();

        if (state.sort) {
            params.sort = state.sort
                .filter((item) => item.dir)
                .map((item) => {
                    if (item.dir) {
                        const obj = new AtlasSort();
                        obj.property = item.field;
                        obj.direction =
                            item.dir === 'asc'
                                ? AtlasSortDirection.Ascending
                                : AtlasSortDirection.Descending;
                        return obj;
                    }
                });
        }
        if (state.filter) {
            // params.filter = [{ operator: 'like', property: 'myField', value: '*search*' }];
        }
        params.pageSize = state.pageSize;
        params.restartRowId = this.rowId ? this.rowId : '';

        return this.dataAccess.get('', params).pipe(
            map((response) => {
                this.rowId = response.restartRowId;
                return response.body.data;
            })
        );
    }

    getUserById(loginSk: number) {
        return this.dataAccess.get(`${loginSk}`).pipe(
            map((response) => {
                return response.body.data;
            })
        );
    }

    deleteById(loginSk: number) {
        return this.dataAccess.deleteById(`${loginSk}`).pipe(
            map((response) => {
                return response.body.data;
            })
        );
    }

    saveUser(data) {
        this.saveSubject.next(data);
    }

    getSaveSubject() {
        return this.saveSubject.asObservable();
    }
}
