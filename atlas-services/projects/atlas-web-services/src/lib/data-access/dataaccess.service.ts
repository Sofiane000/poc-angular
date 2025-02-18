import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AtlasFilter } from '../models/atlas-filter';
import { AtlasRequestParams } from '../models/atlas-request-params';
import { AtlasResponseBody } from '../models/atlas-response-body';

const serviceConfigMap = {};
const serviceMap = {};
let globalBaseUrl = '';

/**
 * Standard Response
 */
export class AtlasResponse {
    constructor(public body: AtlasResponseBody, public restartRowId?: string) {}
}

/**
 * Service implementation
 */
// tslint:disable-next-line:max-classes-per-file
export class DataAccessService {
    constructor(private http: HttpClient, private serviceConfig: DataAccessConfig) {}

    private buildFilter(filter: AtlasFilter[]): string {
        filter.forEach((filterCondition) => {
            if (!filterCondition.dataType) {
                filterCondition.dataType = typeof filterCondition.value;
            }
        });
        return JSON.stringify(filter);
    }

    get(extraUrl?: string, svcParms?: AtlasRequestParams): Observable<AtlasResponse> {
        let url = this.serviceConfig.fullUrl;
        let headers = new HttpHeaders();
        if (svcParms) {
            if (svcParms.pageSize > 0) {
                headers = headers.append('pageSize', svcParms.pageSize + '');
            }
            if (svcParms.restartRowId) {
                headers = headers.append('restartRowId', svcParms.restartRowId);
            }
            if (svcParms.filter) {
                headers = headers.append('filter', this.buildFilter(svcParms.filter));
            }
            if (svcParms.sort) {
                headers = headers.append('sort', JSON.stringify(svcParms.sort));
            }
        }
        if (extraUrl) {
            if (extraUrl.substr(0, 1) !== '/') {
                url += '/';
            }
            url += extraUrl;
        }
        return this.http
            .get<HttpResponse<any>>(url, {
                headers,
                params: svcParms ? svcParms.params : void 0,
                observe: 'response',
            })
            .pipe(
                map((response: HttpResponse<any>) => {
                    return new AtlasResponse(response.body, response.headers.get('restartRowId'));
                })
            );
    }

    update(data: object): Observable<AtlasResponse> {
        return this.http
            .put<HttpResponse<any>>(this.serviceConfig.fullUrl, data, {
                observe: 'response',
            })
            .pipe(
                map((response: HttpResponse<any>) => {
                    return new AtlasResponse(response.body, response.headers.get('restartRowId'));
                })
            );
    }

    create(data: object): Observable<AtlasResponse> {
        return this.http
            .post<HttpResponse<any>>(this.serviceConfig.fullUrl, data, {
                observe: 'response',
            })
            .pipe(
                map((response: HttpResponse<any>) => {
                    return new AtlasResponse(response.body, response.headers.get('restartRowId'));
                })
            );
    }

    deleteById(id: string | number): Observable<AtlasResponse> {
        return this.http
            .delete<HttpResponse<any>>(this.serviceConfig.fullUrl + '/' + id, {
                observe: 'response',
            })
            .pipe(
                map((response: HttpResponse<any>) => {
                    return new AtlasResponse(response.body, response.headers.get('restartRowId'));
                })
            );
    }
}

/**
 * Service configuration
 */
// tslint:disable-next-line:max-classes-per-file
export class DataAccessConfig {
    protected serviceUrl: string;
    protected serviceModule: string;

    constructor(public serviceName: string) {}

    get fullUrl(): string {
        return `${globalBaseUrl}/${this.serviceModule}/${this.serviceUrl}`;
    }

    module(serviceModule): DataAccessConfig {
        this.serviceModule = serviceModule;
        return this;
    }

    url(serviceUrl): DataAccessConfig {
        this.serviceUrl = serviceUrl;
        return this;
    }
}

/**
 * Service factory
 */
// tslint:disable-next-line:max-classes-per-file
@Injectable({
    providedIn: 'root',
})
export class DataAccessFactory {
    private http: HttpClient;

    set baseUrl(newBaseUrl) {
        globalBaseUrl = newBaseUrl;
    }
    get baseUrl() {
        return globalBaseUrl;
    }

    constructor(http: HttpClient) {
        this.http = http;
    }

    createService(serviceName: string): DataAccessConfig {
        if (!serviceConfigMap[serviceName]) {
            serviceConfigMap[serviceName] = new DataAccessConfig(serviceName);
        }
        return serviceConfigMap[serviceName];
    }

    getService<T>(serviceName: string): DataAccessService {
        if (!serviceConfigMap[serviceName]) {
            throw new Error(`Service ${serviceName} is undefined`);
        }
        if (!serviceMap[serviceName]) {
            serviceMap[serviceName] = new DataAccessService(
                this.http,
                serviceConfigMap[serviceName]
            );
        }
        return serviceMap[serviceName];
    }
}
