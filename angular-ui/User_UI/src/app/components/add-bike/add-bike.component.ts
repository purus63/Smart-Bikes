import { AssetManagementService, Vehicle } from './../../asset-management.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'


@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.css']
})
export class AddBikeComponent implements OnInit {
    
    public userFile: any = File;
    disableFor1 = true;
    constructor(private assetService: AssetManagementService) { }
//   fileUploads(event) {
//     this.userFile = event.target.files[0];
//     if (this.userFile !== undefined) {
//       this.disableFor1 = false;
//     } else {
//       this.disableFor1 = true;
//     }
//       console.log(this.userFile);
//   }
  ngOnInit() {
  }
  confirmationString: string="New Bike has been added";
  isAdded: boolean=false;
  bikeObj:Vehicle;
  addNewBike=function(bike) {
    this.bikeObj={
      
      regNo:bike.regno,
      station:bike.station,
      feedbackOrComments:bike.comments,
      vehicleNo:bike.vehicleNo,
      status: 'available',
      charge: bike.charge,
      meterReading: bike.meterReading,
      
    
    }
    // const formData = new FormData();
    // formData.append('image', this.userFile);    
    // formData.append('asset', JSON.stringify(this.bikeObj));
    // console.log(this.bikeObj, this.userFile)
  
    this.assetService.postAsset(this.bikeObj).subscribe(() => {
      this.isAdded = true;
    })
  
  }

 

}