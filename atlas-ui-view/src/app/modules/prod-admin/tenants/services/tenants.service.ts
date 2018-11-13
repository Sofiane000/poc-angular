import { Injectable } from '@angular/core';
import { TREE_DATA } from '../models/tree-data';
@Injectable()
export class TenantsService {
    getTenants() {
        return TREE_DATA.map(item => item);
    }
}
