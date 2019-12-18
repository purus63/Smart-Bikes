import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {


  userId: string;

  constructor(public http: HttpClient) {
    this.http = http;
  }

  // userId:string;
   url = environment.Url + '8086/payment/wallet/add'

  getWallet(userId : string): Observable <any> {
    console.log(userId);
    let url = environment.Url+'8086/payment/wallet/userId';
    return this.http.get(url,{
    headers: new HttpHeaders().set('userId', userId)});

  }
   // saveWallet( userId: string) {
  //   console.log(userId);
  //   return this.http.post(this.url,
  //     {},
  //     {
  //       responseType: 'text',
  //       headers: new HttpHeaders().set('userId', userId)
  //     }
  //   );
  // }
  }

