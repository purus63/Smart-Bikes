import {environment} from './../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../util';
import {UsernameService} from '../username.service';

@Injectable({
  providedIn: 'root'
})
export class UploadDocumentsService {
  private url = environment.Url + '8083/api/v1/userProfile';
  private uri = environment.Url + '8083/api/v1/User';
  private urm = environment.Url + '8083/api/v1/check';
  private subscription: any;

  constructor(public http: HttpClient, private  usernameService: UsernameService) {
    this.http = http;
  }

  saveUser(formData: FormData, username: string) {
    console.log(username);
    return this.http.post(this.url, formData,
      {
        responseType: 'text',
        headers: new HttpHeaders().set('username', username)
      }
    );
  }

  getUser(username: string) {
   return this.http.get(this.uri, {
   headers : new HttpHeaders().set('username', username)
    });
  }
  checkIfFilled(username:string){
    return this.http.get(this.urm, {
      headers : new HttpHeaders().set('username',username)
    });
  }
  }



