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
    authenticate(regNo, password) {
        // return this.httpClient.post<any>('http://172.23.234.63:8085/api/v1/authenticate',{regNo,password}).pipe(
        return this.httpClient.post('http://15.206.48.113:8085/api/v1/authenticate', { regNo, password }).pipe(map(userData => {
            sessionStorage.setItem('bikeid', regNo);
            let tokenStr = userData.token;
            sessionStorage.setItem('biketoken', tokenStr);
            return userData;
        }));
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('regNo');
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('regNo');
        sessionStorage.removeItem('token');
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication-bike.service.js.map