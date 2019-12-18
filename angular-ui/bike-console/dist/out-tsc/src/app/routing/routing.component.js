import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RoutingComponent = class RoutingComponent {
    constructor(routingservice, route, router) {
        this.routingservice = routingservice;
        this.route = route;
        this.router = router;
        this.displayedColumnsDummy = ['id', 'travelDistance', 'travelDuration'];
        this.dummyResults = [
            { id: 0, travelDistance: 10, travelDuration: 20.5 },
            { id: 1, travelDistance: 15, travelDuration: 24.5 },
        ];
        this.displayedColumns = ['name', 'travelDistance'];
        this.coordinates = [];
        this.results = [];
        this.check = false;
        this.dataSource = [];
    }
    ngOnInit() {
        this.locationData = JSON.parse(this.route.snapshot.paramMap.get('locationData'));
        console.log(this.locationData);
        this.routingservice.getDistanceMatrix(this.locationData[0]["destinationCoordinate"]).subscribe(data => {
            console.log("POST Request is successful ", data);
            console.log(data);
            console.log(typeof (data["resourceSets"]));
            this.results = data["resourceSets"][0]["resources"][0]["results"];
            // console.log(data["resourceSets"][0]["resources"][0]["results"][0]["travelDistance"]);
            // console.log("Inside: " + this.results);
            console.log("Inside subscribe!");
            console.log(this.results);
            var userStation = this.locationData[0]["userStation"];
            findNearestStations(this.results, userStation);
        });
        //console.log("Results: " + this.results); This won't work outside subscribe unless data is
        // passed to some method
        let that = this;
        function findNearestStations(results, userStation) {
            console.log("Inside nearest stations!");
            console.log(sort_by_key(results, 'travelDistance'));
            // console.log(typeof that.dataSource)
            // that.dataSource = results.map(e => e);
            // that.routingservice.stations.map(i => {
            //   if(i["name"] == this.locationData[0]["userStation"]) {
            //   }
            // });
            var stations = that.routingservice.stations;
            stations = stations.filter(e => e["name"] !== userStation);
            let arr = [];
            results.map(e => {
                stations.map(i => {
                    if (e["destinationIndex"] == i["id"]) {
                        let obj = Object.assign({}, e, i);
                        // console.log(obj);
                        arr.push(obj);
                    }
                });
            });
            that.dataSource = arr;
            console.log("Data source!");
            // that.check = true;
            // console.log(JSON.stringify(that.dataSource, 1, 1));
            console.log(that.dataSource);
        }
        function sort_by_key(array, key) {
            return array.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
    } //ngOnInit ends here
    navigate(destinationStation, destLatitude, destLongitude) {
        // console.log("navigate!");
        // console.log(destLatitude + " : " + destLongitude);
        var destinationStationCoordinate = [destLatitude, destLongitude];
        var locationData = [{
                "userStation": this.locationData[0]["userStation"],
                "userStationCoordinate": this.locationData[0]["userStationCoordinate"],
                "destinationStation": destinationStation,
                "destinationStationCoordinate": destinationStationCoordinate
            }];
        // console.log(userCoordinate, destCoordinate);
        // this.router.navigateByUrl(`/map-navigation/${JSON.stringify(userCoordinate)}/${JSON.stringify(destCoordinate)}`);
        this.router.navigateByUrl(`/map-navigation/${JSON.stringify(locationData)}`);
    }
};
RoutingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-routing',
        templateUrl: './routing.component.html',
        styleUrls: ['./routing.component.css']
    })
], RoutingComponent);
export { RoutingComponent };
//# sourceMappingURL=routing.component.js.map