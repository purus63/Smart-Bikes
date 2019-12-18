import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  private uri = environment.Url+'8083/api/v1/users';
  private url = environment.Url+'8083/api/v1/status';
  private urL = environment.Url + '8083/api/v1/User'
  constructor(private  http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.uri);
  }
  updateStatus(userId: number) {
    const num = userId.toString();
    return this.http.put(this.url, {}, {
      params: new HttpParams().set('numberAsString', num)
    });
  }

  getUser(username: string) {
    return this.http.get(this.urL, {
    headers : new HttpHeaders().set('username', username)
     });
 
   }
 
}

