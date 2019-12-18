import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthGaurdService = class AuthGaurdService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['user-form']);
        return false;
    }
};
AuthGaurdService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGaurdService);
export { AuthGaurdService };
//# sourceMappingURL=auth-gaurd-bike.service.js.map