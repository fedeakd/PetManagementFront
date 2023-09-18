import { HttpHeaders } from "@angular/common/http";
import { IRouterBase } from "./iRouter";
import { environment } from "src/environment/environment";

export const RouterConfigBase: IRouterBase = {
    api: "api",
    port: environment.port,
    URL: environment.URL,
    httpOptions: {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'responseType': 'text',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        }),
    }
}