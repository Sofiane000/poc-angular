import { Injectable } from '@angular/core';
import { AtlasGridService } from 'atlas-web-components';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataAccessFactory, DataAccessService } from 'atlas-web-services';

@Injectable()
export class DmsService extends AtlasGridService {
    selectedDms: any;
    dataAccess: DataAccessService;

    constructor(dataAccessFactory: DataAccessFactory) {
        super();
        this.dataAccess = dataAccessFactory.getService('dms.categories');
    }

    query(state: any): void {
        this.fetch(state).subscribe((x) => super.next(x));
    }

    fetch(state: any): Observable<any> {
        this.isLoading = true;
        return this.getDms(state).pipe(tap(() => (this.isLoading = false)));
    }

    getDms(state) {
        return this.dataAccess
            .get('', { pageSize: state.pageSize, restartRowId: this.rowId ? this.rowId : '' })
            .pipe(
                map((response) => {
                    this.rowId = response.restartRowId;
                    return response.body.data;
                })
            );
    }

    getDmsById(DocCatgSK: Number) {
        return this.dataAccess.get(`${DocCatgSK}`).pipe(
            map((response) => {
                return response.body.data;
            })
        );
    }
}
