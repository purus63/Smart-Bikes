import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth-service/authentication.service';
import { GetusersService } from 'src/app/services/upload_document/getusers.service';
import { UsernameService } from 'src/app/services/username.service';
import { Subscription } from 'rxjs';
import { UploadDocumentsService } from 'src/app/services/upload_document/upload-documents.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  selected: number;
  private username: string;
  private subscription: Subscription;
  public greetUser: string;
  constructor(private getUserStatus: GetusersService, private usernameService: UsernameService,private userService: UploadDocumentsService) { }

  ngOnInit() {
    this.subscription = this.usernameService.username1.subscribe(
      value => {
        this.username = value;
        console.log(value);
        if (value == null) {
          this.username = localStorage.getItem('username');
        } else {
          localStorage.setItem('username', this.username);
        }
      });
      this.userService.checkIfFilled(this.username).subscribe(data =>   
        { console.log(data); if(data== true){
          this.selected=1;
        }else{
          this.selected=0;
        }

      });
      this.greetUser=sessionStorage.getItem('username');

  }
  dologOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
  }
}
