import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

const serviceConfigMap = {};
const serviceMap = {};
let globalBaseUrl = '';

/**
 * Standard Response From Server
 */
export class AtlasResponseBody {
  status: boolean;
  data: any;
  messages: Array<any>;
  metadata: Array<any>;
}

/**
 * Service implementation
 */
export class DataAccessService {

  constructor(private http: HttpClient, private serviceConfig: DataAccessConfig) {
  }

  get(extraUrl?: String, parms?: HttpParams): Observable<AtlasResponseBody> {
    let url = this.serviceConfig.fullUrl;
    if (extraUrl) {
      if (extraUrl.substr(0, 1) !== '/') {
        url += '/';
      }
      url += extraUrl;
    }
    return this.http.get<AtlasResponseBody>(url, { params: parms });
  }

  update(data: Object): Observable<AtlasResponseBody> {
    return this.http.put<AtlasResponseBody>(this.serviceConfig.fullUrl, data);
  }

  create(data: Object): Observable<AtlasResponseBody> {
    return this.http.post<AtlasResponseBody>(this.serviceConfig.fullUrl, data);
  }

  deleteById(data: Object): Observable<AtlasResponseBody> {
    return this.http.delete<AtlasResponseBody>(this.serviceConfig.fullUrl);
  }

}

/**
 * Service configuration
 */
export class DataAccessConfig {

  protected serviceUrl: string;
  protected serviceModule: string;

  constructor(public serviceName: string) { }

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
      serviceMap[serviceName] = new DataAccessService(this.http, serviceConfigMap[serviceName]);
    }
    return serviceMap[serviceName];
  }

}
