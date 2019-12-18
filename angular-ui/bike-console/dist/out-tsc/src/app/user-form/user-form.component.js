import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserFormComponent = class UserFormComponent {
    constructor(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    userLogin() {
        (this.loginservice.authenticate(this.username, this.password).subscribe(data => {
            this.router.navigate(['user-location']);
            this.invalidLogin = false;
        }, error => {
            this.invalidLogin = true;
            alert('Invalid Credentials');
        }));
    }
};
UserFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-form',
        templateUrl: './user-form.component.html',
        styleUrls: ['./user-form.component.css']
    })
], UserFormComponent);
export { UserFormComponent };
//# sourceMappingURL=user-form.component.js.map