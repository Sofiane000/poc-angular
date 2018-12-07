import { Injectable } from '@angular/core';
import { DataAccessFactory, DataAccessService } from 'atlas-web-services';
import { map } from 'rxjs/operators';
@Injectable()
export class MyTasksService {
    dataAccess: DataAccessService;
    constructor(dataAccessFactory: DataAccessFactory) {
        this.dataAccess = dataAccessFactory.getService('bpm.workitems');
    }
    getWorkItems() {
        return this.dataAccess.get().pipe(map((response) => {
            return response.body.data;
        }));
    }
}
