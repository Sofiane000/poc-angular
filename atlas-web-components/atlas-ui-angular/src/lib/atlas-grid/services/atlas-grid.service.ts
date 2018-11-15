import { BehaviorSubject, Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';

export abstract class AtlasGridService extends BehaviorSubject<any> {
    public isLoading: boolean;
    constructor() {
        super(null);
    }
    abstract fetch(state: any): Observable<any>;
    abstract query(state: any): void;
}
