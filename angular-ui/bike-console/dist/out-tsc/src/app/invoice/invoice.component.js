import * as tslib_1 from "tslib";
import { Feedback } from './../feedback';
import { Component } from '@angular/core';
let InvoiceComponent = class InvoiceComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.rating = '3';
    }
    ngOnInit() {
        this.getWindow().navigator.getBattery().then(battery => {
            this.chargePercent = battery.level * 100;
        });
        console.log("Invoice: " + this.route.snapshot.paramMap.get('invoiceObject'));
        var invoice = JSON.parse(this.route.snapshot.paramMap.get('invoiceObject'));
        console.log(invoice);
        this.fare = invoice["fare"];
        this.travelDistance = invoice["travelDistance"];
        this.travelDuration = invoice["travelDuration"];
        this.startStation = invoice["startStation"];
        this.endStation = invoice["endStation"];
        this.bookingId = invoice["bookingId"];
        // console.log(this.fare);
        // setTimeout(() => {
        //   this.logOut()
        // }, 5000);
    }
    logOut() {
        const feedback = new Feedback();
        feedback.rating = this.rating;
        feedback.comment = this.comment;
        feedback.bookingId = this.bookingId;
        feedback.chargePercent = this.chargePercent;
        console.log(feedback);
        // sessionStorage.removeItem('username'); 
        // sessionStorage.removeItem('token'); 
        // this.router.navigateByUrl('');
        console.log("Rating: " + this.rating);
        console.log("Comment: " + this.comment);
    }
    getWindow() {
        return window;
    }
};
InvoiceComponent = tslib_1.__decorate([
    Component({
        selector: 'app-invoice',
        templateUrl: './invoice.component.html',
        styleUrls: ['./invoice.component.css']
    })
], InvoiceComponent);
export { InvoiceComponent };
//# sourceMappingURL=invoice.component.js.map