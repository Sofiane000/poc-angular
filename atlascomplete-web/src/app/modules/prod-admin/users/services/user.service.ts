import { Injectable } from '@angular/core';
import { AtlasGridService } from 'atlas-ui-angular';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataAccessFactory, DataAccessService } from 'atlas-web-services';

@Injectable()
export class UserService extends AtlasGridService {
  selectedUser: any;
  dataAccess: DataAccessService;

  constructor(dataAccessFactory: DataAccessFactory) {
    super();
    this.dataAccess = dataAccessFactory.getService('idm.users');
  }

  query(state: any): void {
    this.fetch(state).subscribe(x => super.next(x));
  }

  fetch(state: any): Observable<any> {
    this.isLoading = true;
    return this.getUsers().pipe(tap(() => this.isLoading = false));
  }

  getUsers() {
    return this.dataAccess.get().pipe(map((response) => {
      return response.body.data;
    }));
  }

  getUserById(loginSk: Number) {
    return this.dataAccess.get(`${loginSk}`).pipe(map((response) => {
      return response.body.data;
    }));
  }
}
