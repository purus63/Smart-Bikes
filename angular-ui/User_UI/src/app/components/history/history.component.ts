import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { logging } from 'protractor';
import { HistoryService } from 'src/app/services/history.service';
import { UsernameService } from 'src/app/services/username.service';
import { Subscription } from 'rxjs';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
enum type {
  CREDIT,
  DEBIT
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HistoryComponent implements OnInit {
  private subscription: Subscription;
  userId: string;
  invoice: Invoice;
  history = [];
  historyBehaviour: BehaviorSubject<any>;
  res: HttpResponse<any>;
  dataSource: MatTableDataSource<any>;
  private headers = new HttpHeaders().set('Content-type', 'application/json; charset=utf-8');
  columnsToDisplay = ['timeStamp', 'type', 'amount'];
  expandedElement: Invoice | null;
  constructor(private http: HttpClient, private payhistory: HistoryService, private usernameService: UsernameService) {
    this.historyBehaviour = new BehaviorSubject<any>(this.history);
  }

  ngOnInit() {

    this.historyBehaviour.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.subscription = this.usernameService.username1.subscribe(
      value => {
        this.userId = value;
        console.log(value);
        if (value == null) {
          this.userId = localStorage.getItem('username');
        } else {
          localStorage.setItem('username', this.userId);
        }
      });
    console.log(this.userId);
    this.fetchData();
  }
  fetchData() {
    this.payhistory.getUserPaymentDetails(this.userId).subscribe(
      (data: any[]) => {
        data.forEach(
          element => {
            this.history.push(element);
          });
          this.dataSource= new MatTableDataSource(this.history);
      });
      this.payhistory.getUserRideDetails(this.userId).subscribe(data => {
        console.log(data);
      })


  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
export class Invoice {
  starttime: string;
  timeStamp: string;
  type: type;
  amount: number;
  start_station: string;
  end_station: string;
  duration: number;

}