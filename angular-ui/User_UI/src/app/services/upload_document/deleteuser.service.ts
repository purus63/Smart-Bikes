import { environment } from './../../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../util';

@Injectable({
  providedIn: 'root'
})
export class DeleteuserService {
  private uri = environment.Url + '8083/api/v1/users';
  private url = environment.Url + '8083/api/v1/status';
  private urL =  environment.Url + '8087/sendMail';
  private urI = environment.Url + '8084/activate';
  constructor(private  http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.uri);
  }
  getemail(userId: string, email: string) {
    return this.http.get(this.urL,
      {
        params: new HttpParams().set('email', email),
        responseType: 'text'
      });
  }

  updateStatus(userId: string) {
    return this.http.put(this.url, {}, {
      params: new HttpParams().set('numberAsString', userId)
    });
  }

  updateUser(userId: string) {
    return this.http.put(this.urI, {}, {
      params: new HttpParams().set('numberAsString', userId)
    });
  }
}
