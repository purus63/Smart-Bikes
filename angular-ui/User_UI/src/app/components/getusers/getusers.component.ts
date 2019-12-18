import { UploadDocumentsService } from '../../services/upload_document/upload-documents.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {GetusersService} from '../../services/upload_document/getusers.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {User} from '../../util';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.css']
})
export class GetusersComponent implements OnInit {
  private allUsers: User[];
  displayedColumns: string[] = ['number','username', 'name', 'status' , 'dob'];
  dataSource: MatTableDataSource<any>;
  // dataSource = this.allUsers;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private signup: UploadDocumentsService, private service: GetusersService) {
  }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.allUsers = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      console.log(data[0].isBlocked);
      console.log('all repos');
      console.log(data);
      // this.postAll();
    });
  }
  approved(userId: number) {
    this.service.updateStatus(userId).subscribe(data => {
      console.log(data);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // private postAll() {
  // for ( const user of this.AllUsers) {
  //   console.log(user);
  // this.signup.saveUser(user.number, user.firstname, user.lastname, user.email, user.isBlocked).subscribe(
  //   (data) => {
  //     console.log(data);
  //   });
  // }
}
