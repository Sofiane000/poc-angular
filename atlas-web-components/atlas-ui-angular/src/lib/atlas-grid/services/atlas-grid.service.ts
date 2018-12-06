import { Observable, Subject } from 'rxjs';

export abstract class AtlasGridService extends Subject<any> {
    public isLoading: boolean;
    public rowId: any;
    constructor() {
        super();
    }
    abstract fetch(state: any): Observable<any>;
    abstract query(state: any): void;
}
