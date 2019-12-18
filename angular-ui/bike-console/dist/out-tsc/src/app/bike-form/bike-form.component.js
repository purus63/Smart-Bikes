import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let BikeFormComponent = class BikeFormComponent {
    constructor(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        this.regNo = '';
        this.password = '';
        this.invalidLogin = false;
    }
    ngOnInit() {
    }
    bikeLogin() {
        (this.loginservice.authenticate(this.regNo, this.password).subscribe(data => {
            this.router.navigate(['user-form']);
            this.invalidLogin = false;
        }, error => {
            this.invalidLogin = true;
            alert('Invalid Credentials');
        }));
    }
};
BikeFormComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bike-form',
        templateUrl: './bike-form.component.html',
        styleUrls: ['./bike-form.component.css']
    })
], BikeFormComponent);
export { BikeFormComponent };
//# sourceMappingURL=bike-form.component.js.map