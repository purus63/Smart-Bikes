import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UserLocationComponent = class UserLocationComponent {
    constructor(routingservice, router) {
        this.routingservice = routingservice;
        this.router = router;
        this.displayedColumns = ['name'];
        this.dataSource = [];
    }
    ngOnInit() {
        this.dataSource = this.routingservice.stations;
    }
    getUserLocation(userStation, userStationLatitude, userStationLongitude) {
        var userStationCoordinate = [userStationLatitude, userStationLongitude];
        var userLocationObject = [{
                "userStation": userStation,
                "userStationCoordinate": userStationCoordinate
            }];
        // this.router.navigateByUrl(`/map/${JSON.stringify(userStation)}/${JSON.stringify(userStationCoordinate)}`);
        this.router.navigateByUrl(`/map/${JSON.stringify(userLocationObject)}`);
    }
};
UserLocationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-location',
        templateUrl: './user-location.component.html',
        styleUrls: ['./user-location.component.css']
    })
], UserLocationComponent);
export { UserLocationComponent };
//# sourceMappingURL=user-location.component.js.map