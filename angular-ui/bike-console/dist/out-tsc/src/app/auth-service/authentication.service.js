import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
export class User {
    constructor(status) {
        this.status = status;
    }
}
export class JwtResponse {
    constructor(jwttoken) {
        this.jwttoken = jwttoken;
    }
}
let AuthenticationService = class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    authenticate(username, password) {
        // return this.httpClient.post<any>('http://localhost:8082/authenticate',{username,password}).pipe(
        return this.httpClient.post('http://15.206.48.113:8082/authenticate', { username, password }).pipe(map(userData => {
            sessionStorage.setItem('username', username);
            let tokenStr = 'Bearer ' + userData.token;
            sessionStorage.setItem('token', tokenStr);
            return userData;
        }));
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('token');
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map