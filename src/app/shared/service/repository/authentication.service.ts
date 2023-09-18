import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {  map } from 'rxjs/operators';
import { IRouterConfig } from 'src/app/core/configuration/iRouter';

import {  UserLogin, UserRequest } from 'src/app/core/model/entity/user';
import { RouterConfigUserAPIToken } from 'src/app/core/configuration/routerAssistant';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<UserRequest | null>;
  public user: Observable<UserRequest | null>;
  protected port: number;
  protected api: string;
  protected URL: string;
  protected apiURL: string
  protected httpOptions: any;


  constructor(
    @Inject(RouterConfigUserAPIToken) protected router: IRouterConfig,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
    this.port = this.router.port;
    this.api = this.router.api;
    this.URL = this.router.URL;
    this.apiURL = this.router.URL + (this.router.port > 0 ? ":" + this.router.port : "") + "/" + this.router.api + "/User";
    this.httpOptions = this.router.httpOptions;

  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(userLogin: UserLogin) {
    return this.http.post<any>(`${this.apiURL}/BearerToken`, JSON.stringify(userLogin), this.httpOptions)
      .pipe(map(user => {
        let userR: UserRequest;
        userR = {
          username: userLogin.username,
          password: userLogin.password,
          token: (user as unknown as UserRequest).token
        };

        localStorage.setItem('user', JSON.stringify(userR));
        this.userSubject.next(userR);
        return user;
      }),
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}