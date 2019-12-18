import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
 url = environment.Url +   '8086/payment/transaction/user';
 uri = environment.Url +  '8090/booking-service/userRides'
 userId :string;
  constructor(private http: HttpClient) { }

 public getUserPaymentDetails(userId : string){
   console.log(userId)
  return this.http.get(this.url,{
    headers: new HttpHeaders().set('userId', userId)});
}
public getUserRideDetails(userId: string){
  console.log(userId)
  return this.http.get(this.uri,{
    headers: new HttpHeaders().set('userId', userId)});
}

}
