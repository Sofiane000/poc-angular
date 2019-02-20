import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';
import { DataAccessFactory, DataAccessService } from '@atlas/web-services';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RefDataDetailService extends AtlasGridService {
    selectedRefDataList: any;
    dataAccess: DataAccessService;
    saveSubject: Subject<any> = new Subject<any>();

    constructor(dataAccessFactory: DataAccessFactory) {
        super();
        this.dataAccess = dataAccessFactory.getService('ref-data.details');
    }

    query(state: any): void {
        this.fetch(state).subscribe((x) => super.next(x));
    }

    fetch(state: any): Observable<any> {
        this.isLoading = true;
        return; // this.getRefDataDetails(state, '1', '1').pipe(tap(() => (this.isLoading = false)));
    }

    getRefDataDetails(state, tenantTaxnmySK, listTypeSK) {
        return this.dataAccess
            .get('tenant/' + `${tenantTaxnmySK}` + '/detail/' + `${listTypeSK}`, {
                pageSize: state.pageSize,
                restartRowId: this.rowId ? this.rowId : '',
            })
            .pipe(
                map((response) => {
                    const tempData: object[] = response.body.data || [];

                    return tempData.filter((detail) => detail['ListTypeSK'] === listTypeSK);
                })
            );
    }

    getRefDataDetailById(ListDtlSK: number) {
        return this.dataAccess.get(`${ListDtlSK}`).pipe(
            map((response) => {
                return [response.body.data];
            })
        );
    }

    saveRefDataDetail(data) {
        this.saveSubject.next(data);
    }

    getSaveSubject() {
        return this.saveSubject.asObservable();
    }
}
