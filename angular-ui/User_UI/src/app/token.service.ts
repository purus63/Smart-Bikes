import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(public http: HttpClient) {
    this.http = http;
  }

  chargeCard(token: string, amount: number, userID: String) {
    this.http.post(environment.Url+'8086/payment/recharge', {'token':token, 'amount':amount, 'userID':userID})
      .subscribe(resp => {
        console.log(resp);
      })
  }
}
