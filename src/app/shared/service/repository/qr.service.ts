import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';
import { IRouterConfig } from 'src/app/core/configuration/iRouter';
import { RouterConfigQRToken } from 'src/app/core/configuration/routerAssistant';
import { Observable, retry } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class QRService extends BaseService {

    constructor(protected override http: HttpClient,
        @Inject(RouterConfigQRToken) protected override router: IRouterConfig) {
        super(http, router);
    }

    override get(count?: number): Observable<any> {
        let params: HttpParams = new HttpParams();
        if (count !== undefined && count !== null) {
            params = params.append('text', count);
        }

        return this.http
            .get<any>(
                this.apiURL + "/v1/get",
                { params: params }
            )
            .pipe(retry(1));
    }

    getGenerate(count?: number): Observable<any> {
        let params: HttpParams = new HttpParams();
        if (count !== undefined && count !== null) {
            params = params.append('text', count);
        }

        return this.http
            .get<any>(
                this.apiURL + "/v1/generate/" + count,
                //{ params: params }
            )
            .pipe(retry(1));
    }
}