import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';

import {
    AtlasFilter,
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
        const filters: AtlasFilter[] = [];
        if (state.filter) {
            state.filter.filters.map((item) => {
                item.filters.map((filter) => {
                    filters.push({
                        operator: filter.operator,
                        property: filter.field,
                        value: filter.value,
                    });
                });
            });
            params.filter = [...filters];
        }
        if (state.searchFilters) {
            if (params.filter && params.filter.length > 0) {
                params.filter.push(state.searchFilters);
            } else {
                params.filter = [...state.searchFilters];
            }
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

    addUser(userObj: any) {
        return this.dataAccess.create(userObj).pipe(
            map((response) => {
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

    updateUser(userObj: any) {
        return this.dataAccess.update(userObj).pipe(
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
