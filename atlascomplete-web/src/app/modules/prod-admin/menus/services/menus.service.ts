import { Injectable } from '@angular/core';
import { AtlasGridService } from 'atlas-ui-angular';

import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DataAccessService, DataAccessFactory } from 'atlas-web-services';

@Injectable()
export class MenusService extends AtlasGridService {
  dataAccess: DataAccessService;
  saveSubject: Subject<any> = new Subject<any>();
  constructor(dataAccessFactory: DataAccessFactory) {
    super();
    this.dataAccess = dataAccessFactory.getService('idm.menus');
  }

  query(state: any): void {
    this.fetch(state).subscribe(x => super.next(x));
  }

  fetch(state: any): Observable<any> {
    this.isLoading = true;
    return this.getMenus().pipe(tap(() => this.isLoading = false));
  }

  getMenus() {
    return this.dataAccess.get().pipe(map((response) => {
      return response.body.data;
    }));
  }
  getMenuById(tenantTaxnmySK: number) {
    return this.dataAccess.get(`${tenantTaxnmySK}`).pipe(map((response) => {
      return response.body.data;
    }));
  }

  saveTenant(data) {
    this.saveSubject.next(data);
  }

  getSaveSubject() {
    return this.saveSubject.asObservable();
  }
}
