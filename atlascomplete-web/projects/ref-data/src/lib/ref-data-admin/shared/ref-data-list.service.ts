import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';

import { DataAccessFactory, DataAccessService } from '@atlas/web-services';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RefDataListService extends AtlasGridService {
    selectedRefDataList: any;
    dataAccess: DataAccessService;
    saveSubject: Subject<any> = new Subject<any>();

    constructor(dataAccessFactory: DataAccessFactory) {
        super();
        this.dataAccess = dataAccessFactory.getService('ref-data.lists');
    }

    query(state: any): void {
        this.fetch(state).subscribe((x) => super.next(x));
    }

    fetch(state: any): Observable<any> {
        this.isLoading = true;
        return this.getRefDataLists(state).pipe(tap(() => (this.isLoading = false)));
    }

    getRefDataLists(state) {
        return this.dataAccess
            .get('', { pageSize: state.pageSize, restartRowId: this.rowId ? this.rowId : '' })
            .pipe(
                map((response) => {
                    this.rowId = response.restartRowId;
                    return response.body.data;
                })
            );
    }

    getRefDataListById(ListTypeSK: number) {
        return this.dataAccess.get(`${ListTypeSK}`).pipe(
            map((response) => {
                return response.body.data;
            })
        );
    }

    saveRefDataList(data) {
        this.saveSubject.next(data);
    }

    getSaveSubject() {
        return this.saveSubject.asObservable();
    }
}
