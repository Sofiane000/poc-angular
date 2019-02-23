import { Injectable } from '@angular/core';
import { AtlasGridService } from '@atlas/web-components';

import { DataAccessFactory, DataAccessService } from '@atlas/web-services';
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
    return this.dataAccess
      .get('', { pageSize: state.pageSize, restartRowId: this.rowId ? this.rowId : '' })
      .pipe(
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
