import { TripService } from './../trip.service';
import { Feedback } from './../feedback';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  // rating = '3';
  comment: string = '';
  currentRating = 8;

  public fare;
  public travelDistance;
  public travelDuration;
  public startStation;
  public endStation;
  public bookingId;

  public chargePercent: number;

  constructor(private route: ActivatedRoute, private router: Router, 
      private tripservice: TripService) { }

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

    console.log(this.fare);
    setTimeout(() => {
      this.logOut()
    }, 20000);

  }

  logOut() {

    const feedback = new Feedback();
    // feedback.rating = this.rating;
    feedback.rating = this.currentRating.toString();
    feedback.comment = this.comment;
    feedback.booking_id = this.bookingId;
    feedback.charge = this.chargePercent;
    console.log(feedback);
    // console.log("Rating: " + this.rating);
    console.log("Rating: " + this.currentRating);
    console.log("Comment: " + this.comment);
    console.log

    sessionStorage.removeItem('username'); 
    sessionStorage.removeItem('token'); 

    this.tripservice.sendFeedback(feedback).subscribe(() => {
      this.router.navigateByUrl('/user-form');
    });

    // this.router.navigateByUrl('/user-form');

  }

  getWindow(): any {
    return window;
  }

}
