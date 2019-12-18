import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { AssetManagementService } from 'src/app/asset-management.service';
import { Subject } from 'rxjs';

export interface UserData {
  id: number;
  regno: number;
  rideCount:number;
  initStation: string;
  finalStation: string;
  initTime: Date;
  finalTime: Date;
  comments:string;
  userName: string;
}

@Component({
  selector: 'app-bike-history',
  templateUrl: './bike-history.component.html',
  styleUrls: ['./bike-history.component.css']
})
export class BikeHistoryComponent implements OnInit {

  bikesBehaviour2: Subject<any>;

  res: HttpResponse<any>;
  displayedColumns: string[] = ['regNo', 'userName', 'initMeterReading','finalMeterReading','initTime','dropTime','bookingID','feedbackOrComments', 'station'];
  dataSource: any;
  
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private http: HttpClient,private assetHisService:AssetManagementService) {
    this.bikesBehaviour2 = new Subject<any>();
  }

  ngOnInit() {
    
    this.assetHisService.getHistoryAssetData().subscribe((data) => {
      this.bikesBehaviour2.next(data);
      console.log("inside component : ", data);
    });
    this.bikesBehaviour2.subscribe(data => {
      this.dataSource = data;
      this.dataSource.sort = this.sort;
    })

    this.assetHisService.bikesHistory.subscribe((data) => {
      console.log(JSON.parse(data))
      data = JSON.parse(data)
      this.dataSource = this.dataSource.filter(e => e.regNo !== data.regNo);
      this.dataSource.unshift(data);
  });
  }


  // bikeHistory =  [];
  // bikeHistoryBehaviour: BehaviorSubject<any>
  // res: HttpResponse<any>
  // dataSource: MatTableDataSource<UserData>;
  // private headers = new HttpHeaders().set('Content-type','application/json; charset=utf-8');
  // displayedColumns: string[] = [ 'regno', 'rideCount', 'initStation', 'finalStation', 'initTime', 'finalTime', 'comments','userName'];

  // @ViewChild(MatSort, {static: true}) sort: MatSort;


  // constructor(private http:HttpClient,private assetService: AssetManagementService) {


  //   this.bikeHistoryBehaviour = new BehaviorSubject<any> (this.bikeHistory);
     
  //  }

  // ngOnInit() {
  //   this.fetchData();
  //   this.bikeHistoryBehaviour.subscribe(data =>{
  //     this.dataSource = new MatTableDataSource(data);
  //     this.dataSource.sort = this.sort;
  //   })
    
    
  // }

 

  // fetchData= function(){
  //   this.assetService.getHistoryAssetData().subscribe(
  //     (data)=>{
  //       this.bikeHistoryBehaviour.next(data);
  //     }
  //   )
  // }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

   
  // }
}
