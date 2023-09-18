export class User {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    token?: string;
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface UserRequest extends UserLogin {
    token: string;
}