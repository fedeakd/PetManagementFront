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

    generate(): Observable<any> {
        let list = ["92d241de-1957-4266-b0ff-e328ef91908c.jpg",
        "6454f0be-0054-426c-a596-04da031050b9.jpg",
        "4377badc-0d68-43f8-b2f2-a2634e25d751.jpg",
        "c44e1a12-1e52-4362-a5b7-d11d9a6b0a6a.jpg",
        "72559e43-37db-4643-81e9-b748513a58fe.jpg",
        "7e46ff5c-55a0-466a-bdd0-e1837141ec63.jpg",
        "0674b177-1961-4b09-a392-f670746b40ad.jpg",
        "707cb076-0cfa-492a-b06d-eec7fe6b64bd.jpg",
        "b9562d8a-eeda-460b-ab6b-1e71c9091fc5.jpg",
        "6c64b8b2-966b-4c93-88fb-5d12a41fb52b.jpg"];

        return this.http
            .post<any>(
                this.apiURL + "/v1/getList",
                JSON.stringify(list),
                this.httpOptions
            )
            .pipe(retry(1));
    }
}