import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-dialogbox2',
  templateUrl: './dialogbox2.component.html',
  styleUrls: ['./dialogbox2.component.css']
})
export class Dialogbox2Component implements OnInit {
   //private  url = environment.Url + '8088/#/userdashboard'
	private  url = 'http://bolt.stackroute.io/#/userdashboard'

  constructor() { }

  ngOnInit() {
  }

  goToWallet() {
    location.replace(this.url);
  }
}



