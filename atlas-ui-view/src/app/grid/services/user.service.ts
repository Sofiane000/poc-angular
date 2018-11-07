import { Injectable } from '@angular/core';
import { AtlasGridService } from 'atlas-ui-angular';

import { Observable, of as observableOf, merge } from 'rxjs';
import { USER_DATA } from '../models/user';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserService extends AtlasGridService {
    selectedUser: any;
    query(state: any): void {
        this.fetch(state).subscribe(x => super.next(x));
    }
    fetch(state: any): Observable<any> {
        this.isLoading = true;
        const dataMutations = [
            observableOf(USER_DATA)
        ];
        // data has to be replaced with live data
        return merge(...dataMutations).pipe(map((response) => {
            return response;
        }), tap(() => this.isLoading = false));
    }
}
