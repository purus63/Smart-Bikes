import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let BasicAuthHtppInterceptorService = class BasicAuthHtppInterceptorService {
    constructor() { }
    intercept(req, next) {
        if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
            req = req.clone({
                setHeaders: {
                    Authorization: sessionStorage.getItem('token')
                }
            });
        }
        return next.handle(req);
    }
};
BasicAuthHtppInterceptorService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], BasicAuthHtppInterceptorService);
export { BasicAuthHtppInterceptorService };
//# sourceMappingURL=basic-auth-htpp-interceptor.service.js.map