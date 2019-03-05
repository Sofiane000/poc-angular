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

@Injectable({
    providedIn: 'root',
})
export class ChaseProviderService extends AtlasGridService {
    selectedProvider: any;
    dataAccess: DataAccessService;
    saveProviderSubject: Subject<any> = new Subject<any>();
    autoLoad = false;

    constructor(dataAccessFactory: DataAccessFactory) {
        super();
        this.dataAccess = dataAccessFactory.getService('qms.providers');
    }

    query(state: any): void {
        if (this.autoLoad) {
            this.fetch(state).subscribe((x) => super.next(x));
        }
    }

    fetch(state: any): Observable<any> {
        this.isLoading = true;
        return this.getProviders(state).pipe(tap(() => (this.isLoading = false)));
    }

    getProviders(state) {
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

    getProvidersAutoComplete(state) {
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

    saveSelectedProvider(data) {
        this.saveProviderSubject.next(data);
    }

    getSaveProviderSubject() {
        return this.saveProviderSubject.asObservable();
    }
}
