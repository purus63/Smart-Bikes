import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

    sendMessage(message: number) {
        this.messageSource.next(message);
    }

    getMessage(): Observable<any> {
        return this.messageSource.asObservable();
    }
}
