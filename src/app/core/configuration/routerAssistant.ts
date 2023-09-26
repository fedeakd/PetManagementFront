import { IRouterConfig } from "./iRouter";
import { InjectionToken } from "@angular/core";
import { RouterConfigBase } from "./routerConfig";


export let RouterConfigUserToken = new InjectionToken("Router.Config.User");

export const RouterConfigUser: IRouterConfig = {
    entity: "User",
    api: RouterConfigBase.api,
    port: RouterConfigBase.port,
    URL: RouterConfigBase.URL,
    httpOptions: RouterConfigBase.httpOptions
}

export let RouterConfigQRToken = new InjectionToken("Router.Config.QR");

export const RouterConfigQR: IRouterConfig = {
    entity: "qr",
    api: RouterConfigBase.api,
    port: RouterConfigBase.port,
    URL: RouterConfigBase.URL,
    httpOptions: RouterConfigBase.httpOptions
}