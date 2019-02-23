import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';

import { DataAccessFactory, DataAccessService } from '@atlas/web-services';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ChaseMembersService extends AtlasGridService {
  selectedUser: any;
  dataAccess: DataAccessService;

  constructor(dataAccessFactory: DataAccessFactory) {
    super();
    this.dataAccess = dataAccessFactory.getService('qms.members');
  }

  query(state: any): void {
    this.fetch(state).subscribe((x) => super.next(x));
  }

  fetch(state: any): Observable<any> {
    this.isLoading = true;
    return this.getMembers(state).pipe(tap(() => (this.isLoading = false)));
  }

  getMembers(state) {
    return this.dataAccess
      .get('', { pageSize: state.pageSize, restartRowId: this.rowId ? this.rowId : '' })
      .pipe(
        map((response) => {
          this.rowId = response.restartRowId;
          return response.body.data;
        })
      );
  }
}
