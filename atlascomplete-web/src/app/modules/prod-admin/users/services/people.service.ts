import { Injectable } from '@angular/core';
import { AtlasGridService } from 'atlas-ui-angular';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

export class AtlasResponse {
  status: boolean;
  data: any;
  messages: Array<any>;
  metadata: Array<any>;
}

@Injectable()
export class PeopleService extends AtlasGridService {
    selectedUser: any;

    constructor(private http: HttpClient) {
      super();
    }

    query(state: any): void {
        this.fetch(state).subscribe(x => super.next(x));
    }

    fetch(state: any): Observable<any> {
      this.isLoading = true;
      return this.getUsers().pipe(tap(() => this.isLoading = false));
    }

    getUsers() {
      return this.http.get<AtlasResponse>('/api/idm/users').pipe(map((response) => {
        return response.data;
      }));
    }

    getUserById(loginSk: Number) {
      return this.http.get<AtlasResponse>('/api/idm/users/' + loginSk).pipe(map((response) => {
        return response.data;
      }));
    }
}
