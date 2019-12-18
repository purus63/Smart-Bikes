import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let TripService = class TripService {
    constructor(http) {
        this.http = http;
    }
    // aws ip Url: 'http://15.206.48.113:'
    // 172.23.239.104 booking ip
    //
    startTripBooking(booking) {
        // return this.http.post("http://172.23.234.98:8090/booking-service/start_ride", booking);
        return this.http.post("http://15.206.48.113:8090/booking-service/start_ride", booking);
    }
    endTripBooking(booking) {
        // return this.http.post("http://172.23.234.98:8090/booking-service/end_ride", booking);
        return this.http.post("http://15.206.48.113:8090/booking-service/end_ride", booking);
    }
    pay(payment) {
        // return this.http.post("http://172.23.234.75:8086/payment/pay", payment);
        return this.http.post("http://15.206.48.113:8086/payment/pay", payment);
    }
    getInvoice() {
        return this.http.get("http://localhost:30001/invoice");
    }
    getMeterReading(regNo) {
        // return this.http.get("http://172.23.234.63:8085/api/v1/consoleEntry/" + regNo);
        return this.http.get("http://15.206.48.113:8085/api/v1/consoleEntry/" + regNo);
    }
};
TripService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TripService);
export { TripService };
//# sourceMappingURL=trip.service.js.map