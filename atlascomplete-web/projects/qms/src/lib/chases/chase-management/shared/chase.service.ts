import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';

import { AtlasRequestParams, DataAccessFactory, DataAccessService } from '@atlas/web-services';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ChaseService extends AtlasGridService {
    selectedMember: any;
    selectedChaseMembers: any;
    assignWorkQueue: any;
    updateChase: any;

    dataAccess: DataAccessService;
    saveSubject: Subject<any> = new Subject<any>();
    saveChaseSubject: Subject<any> = new Subject<any>();

    constructor(dataAccessFactory: DataAccessFactory) {
        super();
        this.dataAccess = dataAccessFactory.getService('qms.chase');
    }

    query(state: any): void {
        this.fetch(state).subscribe((x) => super.next(x));
    }

    fetch(state: any): Observable<any> {
        this.isLoading = true;
        return this.getChases(state).pipe(tap(() => (this.isLoading = false)));
    }

    getChases(state) {
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
        this.saveSubject.next(data);
    }

    getSaveSubject() {
        return this.saveSubject.asObservable();
    }

    saveSelectedChaseMembers(data) {
        this.saveChaseSubject.next(data);
    }

    getSaveChaseSubject() {
        return this.saveChaseSubject.asObservable();
    }
}