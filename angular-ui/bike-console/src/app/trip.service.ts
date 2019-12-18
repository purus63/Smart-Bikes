import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  // aws ip Url: 'http://15.206.48.113:'


  public startTripBooking(booking) {
    // return this.http.post("http://172.23.234.98:8090/booking-service/start_ride", booking);
    return this.http.post("http://15.206.48.113:8090/booking-service/start_ride", booking);
  }

  public endTripBooking(booking) {
    // return this.http.post("http://172.23.234.98:8090/booking-service/end_ride", booking);
    return this.http.post("http://15.206.48.113:8090/booking-service/end_ride", booking);
  }

  public pay(payment) {
    // return this.http.post("http://172.23.234.75:8086/payment/pay", payment);
    return this.http.post("http://15.206.48.113:8086/payment/pay", payment);
  } 

  public getInvoice() {
    return this.http.get("http://localhost:3000/invoice");
  }

  public getMeterReading(regNo) {
    // return this.http.get("http://172.23.234.91:8085/api/v1/consoleEntry/" + regNo);
    return this.http.get("http://15.206.48.113:8085/api/v1/consoleEntry/" + regNo);
  }

  public sendFeedback(feedback) {
    // return this.http.get("http://172.23.234.98:8090/booking-service/after_ride", feedback);
    return this.http.post("http://15.206.48.113:8090/booking-service/after_ride", feedback);
  }

}
