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
export class TenantsService extends AtlasGridService {
    
    constructor(private http: HttpClient) {
      super();
    }

    query(state: any): void {
        this.fetch(state).subscribe(x => super.next(x));
    }

    fetch(state: any): Observable<any> {
      this.isLoading = true;
      return this.getTenants().pipe(tap(() => this.isLoading = false));
    }

    getTenants() {
      return this.http.get<AtlasResponse>('/api/idm/tenants').pipe(map((response) => {
        return response.data;
      }));
    }

}