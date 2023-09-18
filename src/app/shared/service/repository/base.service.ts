import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { IRouterConfig } from 'src/app/core/configuration/iRouter';

export abstract class BaseService {
    protected entity: string;
    protected port: number;
    protected api: string;
    protected URL: string;
    protected apiURL: string
    protected httpOptions: any;

    constructor(protected http: HttpClient, protected router: IRouterConfig) {
        this.entity = router.entity;
        this.port = router.port;
        this.api = router.api;
        this.URL = router.URL;
        this.apiURL = router.URL + (router.port > 0 ? ":" + router.port : "") + "/" + router.api + "/" + router.entity;
        this.httpOptions = router.httpOptions;
    }

    create(employee: any): Observable<any> {
        return this.http
            .post<any>(
                this.apiURL,
                JSON.stringify(employee),
                this.httpOptions
            )
            .pipe(retry(1));
    }

    edit(id: number, employee: any): Observable<any> {
        return this.http.put<any>(
            this.apiURL + "/" + id,
            JSON.stringify(employee),
            this.httpOptions
        ).pipe(retry(1));

    }

    detele(id: number) {
        return this.http.delete<number>(
            this.apiURL + "/" + id,
            this.httpOptions
        ).pipe(retry(1));

    }

    get(id: number): Observable<any> {
        return this.http
            .get<any>(
                this.apiURL + "/" + id,
                this.router.httpOptions
            )
            .pipe(retry(1));
    }

    getAll(): Observable<any> {

        return this.http
            .get<any>(
                this.apiURL,
                this.router.httpOptions
            )
            .pipe(retry(1));
    }
}