export interface IRouterBase {
    port: number;
    api: string;
    URL: string;
    httpOptions: any;
}

export interface IRouterConfig extends IRouterBase {
    entity: string;

}