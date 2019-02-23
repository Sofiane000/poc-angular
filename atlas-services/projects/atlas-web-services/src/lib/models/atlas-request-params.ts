import { HttpParams } from '@angular/common/http';
import { AtlasFilter } from './atlas-filter';
import { AtlasSort } from './atlas-sort';

/**
 * Standard Request Server
 */
export class AtlasRequestParams {
    pageSize?: number;
    restartRowId: string;
    params?: HttpParams;
    filter?: AtlasFilter[];
    sort?: AtlasSort[];
}
