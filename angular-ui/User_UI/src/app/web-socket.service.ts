import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

var Stomp = require("stompjs/lib/stomp.js").Stomp
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  url = environment.Url +'8083/socket'
  constructor() { }
  webSocketEndPoint: string = this.url;
  topic: string = "/topic/approval";
  stompClient: any;
  connect() {
    console.log("Initialize WebSocket Connection");
    let socket = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(socket);
    const _this = this;
    _this.stompClient.connect({}, function (frame) {
      _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
        console.log(sdkEvent);
      });
      //_this.stompClient.reconnect_delay = 2000;
    }, this.errorCallBack);
  };
  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }
  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
      this.connect();
    }, 5000);
  }
}
