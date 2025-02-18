import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {
    AtlasFilter,
    AtlasRequestParams,
    AtlasSort,
    AtlasSortDirection,
    DataAccessFactory,
    DataAccessService,
} from '@atlas/web-services';

@Injectable()
export class ChaseMembersService extends AtlasGridService {
    selectedMember: any;
    dataAccess: DataAccessService;
    saveMemberSubject: Subject<any> = new Subject<any>();
    autoLoad = false;

    constructor(dataAccessFactory: DataAccessFactory) {
        super();
        this.dataAccess = dataAccessFactory.getService('qms.members');
    }

    query(state: any): void {
        if (this.autoLoad) {
            this.fetch(state).subscribe((x) => super.next(x));
        }
    }

    fetch(state: any): Observable<any> {
        this.isLoading = true;
        return this.getMembers(state).pipe(tap(() => (this.isLoading = false)));
    }

    getMembers(state) {
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
                        operator: 'like',
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

    getMembersAutoComplete(state) {
        const params: AtlasRequestParams = new AtlasRequestParams();

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

    saveSelectedMember(data) {
        this.saveMemberSubject.next(data);
    }

    getSaveMemberSubject() {
        return this.saveMemberSubject.asObservable();
    }
}
