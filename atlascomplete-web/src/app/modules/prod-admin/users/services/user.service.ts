import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';

import { DataAccessFactory, DataAccessService } from '@atlas/web-services';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserService extends AtlasGridService {
    selectedUser: any;
    dataAccess: DataAccessService;
    isLoading: boolean;

    constructor(dataAccessFactory: DataAccessFactory) {
        super();
        this.dataAccess = dataAccessFactory.getService('idm.users');
    }

    query(state: any): void {
        this.fetch(state).subscribe((x) => super.next(x));
    }

    fetch(state: any): Observable<any> {
        this.isLoading = true;
        return this.getUsers().pipe(tap(() => (this.isLoading = false)));
    }

    getUsers() {
        return this.dataAccess.get('', { pageSize: 2, restartRowId: '1' }).pipe(
            map((response) => {
                // restart row is in response.restartRowId
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
}
