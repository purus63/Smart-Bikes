import * as tslib_1 from "tslib";
import { Invoice } from './../invoice';
import { Payment } from './../payment';
import { Booking } from './../booking';
import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
let MapNavigationComponent = class MapNavigationComponent {
    constructor(routeapiservice, zone, route, tripservice, router) {
        this.routeapiservice = routeapiservice;
        this.zone = zone;
        this.route = route;
        this.tripservice = tripservice;
        this.router = router;
        this.rideStarted = false;
        this.booking = new Booking();
        this.globalPayment = new Payment();
        this.globalInvoice = new Invoice();
        this.isCharging = false;
        this.points = [];
        // coordinates = [[12.934485,77.6192336],[12.934603,77.611312]];
        this.coordinates = [];
        this.checkforbranching = "this is to see if branching and updation have happened or not";
    }
    ngOnInit() {
        this.bikeid = sessionStorage.bikeid;
        console.log("Bikeid: " + this.bikeid);
        this.tripservice.getMeterReading(this.bikeid).subscribe(meter => {
            console.log(meter);
        });
        this.locationData = JSON.parse(this.route.snapshot.paramMap.get('locationData'));
        console.log(this.locationData);
        // End Trip Button is shown only if the device is charging 
        this.getWindow().navigator.getBattery().then(battery => {
            // console.log("Is charging: " + battery.charging);
            // battery.onchargingchange = onStartCharging();
            // function onStartCharging() {
            //   that.isCharging = true;
            // }
            battery.addEventListener('chargingchange', () => {
                console.log("Battery charging? "
                    + (battery.charging ? "Yes" : "No"));
                if (battery.charging) {
                    this.isCharging = true;
                }
                else {
                    this.isCharging = false;
                }
                console.log(this.isCharging);
            });
        });
        this.coordinates[0] = this.locationData[0]["userStationCoordinate"];
        this.coordinates[1] = this.locationData[0]["destinationStationCoordinate"];
        console.log(this.coordinates);
        var midPointLong = (this.coordinates[0][1] + this.coordinates[1][1]) / 2;
        var midPointLat = (this.coordinates[0][0] + this.coordinates[1][0]) / 2;
        Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoiZ2F1dGhhbTk5IiwiYSI6ImNrMzRlMmxrNjE0ZTMzbXBhOWRwdDk1eTcifQ.-ZceQ8jARpf90y0tJnQhoQ');
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            // center: [this.coordinates[0][1]+0.002,this.coordinates[0][0]+0.002],
            center: [midPointLong, midPointLat],
            zoom: 13
        });
        var geomarker = new mapboxgl.Marker({
            draggable: false,
            color: "blue"
        })
            .setLngLat([this.coordinates[0][1], this.coordinates[0][0]])
            .addTo(map);
        updatepointsonmap(this.coordinates);
        this.routeapiservice.getGeoJsonLatLOng(this.coordinates).subscribe((data2) => {
            this.zone.run(() => {
                console.log(data2);
                this.travelDistance = data2["resourceSets"][0]["resources"][0]["travelDistance"];
                this.waypoints = data2;
                makegeojsonline(data2);
            });
        });
        function makegeojsonline(coordinateset) {
            map.on('load', function () {
                var actualcordinates = coordinateset.resourceSets[0].resources[0].routePath.line.coordinates;
                var revcoordinates = [];
                for (var j = 0; j < actualcordinates.length; j++) {
                    revcoordinates[j] = [actualcordinates[j][1], actualcordinates[j][0]];
                }
                console.log(revcoordinates);
                map.addLayer({
                    "id": "route",
                    "type": "line",
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "type": "LineString",
                                "coordinates": revcoordinates
                            }
                        }
                    },
                    "layout": {
                        "line-join": "round",
                        "line-cap": "round"
                    },
                    "paint": {
                        "line-color": "#2d81b3",
                        "line-width": 5
                    }
                });
            });
        }
        function updatepointsonmap(coordinates) {
            for (var i = 1; i < 2; i++) {
                var geomarker = new mapboxgl.Marker({
                    draggable: false,
                    color: "orange"
                })
                    .setLngLat([coordinates[i][1], coordinates[i][0]])
                    .addTo(map);
            }
        }
    } // ngOnit ends
    getWindow() {
        return window;
    }
    startTrip() {
        this.booking.user_id = sessionStorage.username;
        // this.booking.user_id = '12345';
        this.booking.vehicle_id = "MH49-7867";
        this.booking.initial_meter_reading = 95;
        this.booking.final_meter_reading = this.booking.initial_meter_reading;
        // this.booking.start_station = "Phoenix Marketcity";
        // this.booking.end_station = "Forum Mall";
        this.booking.start_station = this.locationData[0]["userStation"];
        this.booking.end_station = this.locationData[0]["destinationStation"];
        this.rideStarted = true;
        console.log(this.booking);
        this.tripservice.startTripBooking(this.booking).subscribe();
    }
    endTrip() {
        this.rideStarted = false;
        this.booking["final_meter_reading"] = this.booking["final_meter_reading"] +
            Math.floor((Math.random() * 10)) + this.travelDistance;
        console.log("Travel Distance: " + this.travelDistance);
        console.log(this.booking);
        this.tripservice.endTripBooking(this.booking).subscribe(data => {
            console.log(data);
            console.log(data["booking_id"]);
            // booking_id = data["booking_id"];
            // fare = Math.round(data["fare"]);
            makePayment(data["booking_id"], Math.round(data["fare"]), this.tripservice);
        });
        //////////////////////////////
        // Only for testing payment service
        // this.globalPayment.fare = 500;
        // this.globalPayment.userID = "god@gmail.com";
        // this.globalPayment.booking_id = "54321";
        // console.log(this.globalPayment);
        // this.tripservice.pay(this.globalPayment).subscribe();
        ///////////////////////////////
        // Only for Invoice
        // const invoice = new Invoice();
        // invoice.fare = 100;
        // invoice.travelDistance = 15;
        // console.log(invoice);
        // this.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
        /////////////////////////////////
        // Getting data through invoice json server
        // this.tripservice.getInvoice().subscribe(invoice => {
        //     console.log(invoice);
        //     this.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
        // });
        // console.log("Username: " + sessionStorage.username);
        /////////////////////////////////
        let that = this;
        function makePayment(booking_id, fare, tripservice) {
            console.log("fare: " + fare);
            console.log("booking_id: " + booking_id);
            console.log("Username: " + sessionStorage.username);
            const payment = new Payment();
            payment.fare = fare;
            payment.userID = "raj@gmail.com";
            // payment.userID = sessionStorage.username;
            payment.booking_id = booking_id;
            console.log(payment);
            const invoice = new Invoice();
            invoice.fare = fare;
            invoice.travelDistance = that.travelDistance;
            invoice.travelDuration = 10;
            invoice.startStation = that.locationData[0]["userStation"];
            invoice.endStation = that.locationData[0]["destinationStation"];
            invoice.bookingId = booking_id;
            console.log(invoice);
            tripservice.pay(payment).subscribe(() => {
                that.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
            });
            // tripservice.getInvoice().subscribe(invoice => {
            //   console.log(invoice);
            //   this.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
            // });
            // this.router.navigateByUrl(`/invoice/${JSON.stringify(invoice)}`);
        }
    }
};
MapNavigationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-map-navigation',
        templateUrl: './map-navigation.component.html',
        styleUrls: ['./map-navigation.component.css']
    })
], MapNavigationComponent);
export { MapNavigationComponent };
//# sourceMappingURL=map-navigation.component.js.map