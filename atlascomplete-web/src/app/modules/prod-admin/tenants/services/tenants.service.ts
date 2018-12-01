import { Injectable } from '@angular/core';
import { AtlasGridService } from 'atlas-ui-angular';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataAccessService, DataAccessFactory } from 'atlas-web-services';

@Injectable()
export class TenantsService extends AtlasGridService {
  dataAccess: DataAccessService;

  constructor(dataAccessFactory: DataAccessFactory) {
    super();
    this.dataAccess = dataAccessFactory.getService('idm.tenants');
  }

  query(state: any): void {
    this.fetch(state).subscribe(x => super.next(x));
  }

  fetch(state: any): Observable<any> {
    this.isLoading = true;
    return this.getTenants().pipe(tap(() => this.isLoading = false));
  }

  getTenants() {
    return this.dataAccess.get().pipe(map((response) => {
      return response.data;
    }));
  }
}
