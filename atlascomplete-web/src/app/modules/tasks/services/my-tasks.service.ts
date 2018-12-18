import { Injectable } from '@angular/core';
import { DataAccessFactory, DataAccessService } from 'atlas-web-services';
import { map } from 'rxjs/operators';
@Injectable()
export class MyTasksService {
    dataAccess: DataAccessService;
    constructor(dataAccessFactory: DataAccessFactory) {
        this.dataAccess = dataAccessFactory.getService('bpm.workitems');
    }
    getWorkItems(type: string) {
        return this.dataAccess.get(`${type}`).pipe(map((response) => {
            return response.body.data;
        }));
    }
}
