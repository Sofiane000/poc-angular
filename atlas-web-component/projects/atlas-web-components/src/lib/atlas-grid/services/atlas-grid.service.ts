import { Observable, Subject, BehaviorSubject } from 'rxjs';

export abstract class AtlasGridService extends BehaviorSubject<any> {
    public isLoading: boolean;
    public rowId: any;
    constructor() {
        super(null);
    }
    abstract fetch(state: any): Observable<any>;
    abstract query(state: any): void;
}
