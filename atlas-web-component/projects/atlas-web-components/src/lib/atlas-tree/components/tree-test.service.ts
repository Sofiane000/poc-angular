import { Observable, merge, of as observableOf } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AtlasGridService } from '../../atlas-grid/services/atlas-grid.service';
export class TreeTestService extends AtlasGridService {
    query(state: any): void {
        this.fetch(state).subscribe((x) => super.next(x));
    }
    fetch(state: any): Observable<any> {
        this.isLoading = true;
        const dataMutations = [observableOf(TREE_DATA)];
        // data has to be replaced with live data
        return merge(...dataMutations).pipe(
            map((response) => {
                return response;
            }),
            tap(() => (this.isLoading = false))
        );
    }
}
export const TREE_DATA = [
    {
        TenantTaxnmySK: 6,
        ParentTenantTaxnmySK: null,
        TenantTaxnmyName: 'Global',
        TenantTaxnmyType: 'Global',
        EfctvStartDt: '1900-01-01',
        EfctvEndDt: '9999-12-31',
        RootDomain: '5',
        daTableRowId: 'AAAAAAAJGMU=',
        expanded: true,
        children: [
            {
                TenantTaxnmySK: 1,
                ParentTenantTaxnmySK: 6,
                TenantTaxnmyName: 'Caidan Management Company (CMC)',
                TenantTaxnmyType: 'Tenant',
                EfctvStartDt: '1902-01-01',
                EfctvEndDt: '9999-12-31',
                RootDomain: 'welcome.com1',
                daTableRowId: 'AAAAAAAJGMA=',
                children: [
                    {
                        TenantTaxnmySK: 28,
                        ParentTenantTaxnmySK: 1,
                        TenantTaxnmyName: 'Caidan Management Company (CMC)',
                        TenantTaxnmyType: 'Acct',
                        EfctvStartDt: '1900-01-01',
                        EfctvEndDt: '9999-12-31',
                        RootDomain: '27',
                        daTableRowId: 'AAAAAAAJGNs=',
                        children: [
                            {
                                TenantTaxnmySK: 63,
                                ParentTenantTaxnmySK: 28,
                                TenantTaxnmyName: 'Caidan Management Company (CMC)',
                                TenantTaxnmyType: 'Grp',
                                EfctvStartDt: '1900-01-01',
                                EfctvEndDt: '9999-12-31',
                                RootDomain: '62',
                                daTableRowId: 'AAAAAAAJGP4=',
                                children: [
                                    {
                                        TenantTaxnmySK: 319,
                                        ParentTenantTaxnmySK: 63,
                                        TenantTaxnmyName: 'Caidan Management Company Employees',
                                        TenantTaxnmyType: 'PopGrp',
                                        EfctvStartDt: '1900-01-01',
                                        EfctvEndDt: '9999-12-31',
                                        RootDomain: '316',
                                        daTableRowId: 'AAAAAAAJGfw=',
                                    },
                                    {
                                        TenantTaxnmySK: 320,
                                        ParentTenantTaxnmySK: 63,
                                        TenantTaxnmyName: 'Caidan Management Company Executives',
                                        TenantTaxnmyType: 'PopGrp',
                                        EfctvStartDt: '1900-01-01',
                                        EfctvEndDt: '9999-12-31',
                                        RootDomain: '317',
                                        daTableRowId: 'AAAAAAAJGf0=',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
