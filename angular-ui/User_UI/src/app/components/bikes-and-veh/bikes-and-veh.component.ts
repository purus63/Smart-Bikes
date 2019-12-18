import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AssetManagementService } from 'src/app/asset-management.service';

@Component({
  selector: 'app-bikes-and-veh',
  templateUrl: './bikes-and-veh.component.html',
  styleUrls: ['./bikes-and-veh.component.css']
})
export class BikesAndVehComponent implements OnInit {
 
  bikes=[];
  bikesBehaviour :BehaviorSubject<any>
  regno: number;
  res: HttpResponse<any>;  
  displayedColumns: string[] = ['regNo', 'status', 'feedbackOrComments', 'station', 'actions']; 
  
  dataSource :MatTableDataSource<any>;
  private headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private http:HttpClient,private assetService: AssetManagementService) { 
    this.bikesBehaviour = new BehaviorSubject<any>(this.bikes);
  }
  
  ngOnInit() {
    this.fetchData();
    
    this.bikesBehaviour.subscribe( data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
  }
 
  fetchData = function () {

    this.assetService.getAssetData().subscribe((data) => {

      this.bikesBehaviour.next(data);

      console.log("inside component : ",data); 

    });
  
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  removeBike = function (regNo: String) {
    if (confirm("Are you sure?")) {
      return this.assetService.deleteAsset(regNo).toPromise()
        .then(() => {
          this.fetchData();
        }
        )
    }
  }
}
