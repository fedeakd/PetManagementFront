import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';
import { IRouterConfig } from 'src/app/core/configuration/iRouter';
import { RouterConfigQRToken } from 'src/app/core/configuration/routerAssistant';
import { Observable, retry } from 'rxjs';
import { PetQRInfotmation } from 'src/app/core/model/entity/qrInformation';


@Injectable({
    providedIn: 'root'
})
export class QRService extends BaseService {

    constructor(protected override http: HttpClient,
        @Inject(RouterConfigQRToken) protected override router: IRouterConfig) {
        super(http, router);
    }

    getbyGuid(guid?: string): Observable<any> {
        let params: HttpParams = new HttpParams();
        if (guid !== undefined && guid !== null) {
            params = params.append('guid', guid);
        }

        return this.http
            .get<any>(
                this.apiURL + "/v1",
                { params: params }
            )
            .pipe(retry(1));
    }

    getbyToken(token?: string): Observable<any> {
        let params: HttpParams = new HttpParams();
        if (token !== undefined && token !== null) {
            params = params.append('token', token);
        }

        return this.http
            .get<any>(
                this.apiURL + "/v1/gbt",
                { params: params }
            )
            .pipe(retry(1));
    }

    sendEditEmail(guid?: string): Observable<any> {
        let params: HttpParams = new HttpParams();
        if (guid !== undefined && guid !== null) {
            params = params.append('guid', guid);
        }

        return this.http
            .get<any>(
                this.apiURL + "/v1/SendEmail",
                { params: params }
            )
            .pipe(retry(1));
    }

    sendEditEmailPost(guid?: string): Observable<any> {
        let params: HttpParams = new HttpParams();
        if (guid !== undefined && guid !== null) {
            params = params.append('guid', guid);
        }

        return this.http
            .post<any>(
                this.apiURL + "/v1/SendEmail",
                JSON.stringify(guid),
                this.httpOptions
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

    CreatePetQrInformation(guid: string, petQrInformation: PetQRInfotmation): Observable<any> {

        let json = {
            guid: guid,
            petInformation: petQrInformation
        };


        return this.http
            .post<any>(
                this.apiURL + "/v1/CreatePetQrInformation",
                JSON.stringify(json),
                this.httpOptions
            )
            .pipe(retry(1));
    }

    EditPetQrInformation(guid: string, petQrInformation: PetQRInfotmation): Observable<any> {

        let json = {
            guid: guid,
            petInformation: petQrInformation
        };

        return this.http
            .post<any>(
                this.apiURL + "/v1/EditPetQrInformation",
                JSON.stringify(json),
                this.httpOptions
            )
            .pipe(retry(1));
    }

    generate(count: number): Observable<any> {

        return this.http
            .post<any>(
                this.apiURL + "/v1",
                JSON.stringify(count),
                this.httpOptions
            )
            .pipe(retry(1));
    }
}