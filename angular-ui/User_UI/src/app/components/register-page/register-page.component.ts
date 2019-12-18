import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  username = ''
  password = ''
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router,private httpClient:HttpClient,public snackBar: MatSnackBar) { }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }


  ngOnInit() {
  }

  register(message: string, action: string){
    console.log("username :",this.username,"password : ",this.password );
    let data = {"username": this.username, "password": this.password};
  //   this.httpClient.post('http://localhost:8084/register',data);
  //   alert('Clicked Register Button')
  // }
  this.httpClient.post<any>(environment.Url +"8084/register",data).subscribe(
    data=>{console.log("data: ",data);}
  )
  this.snackBar.open(message, action, {
    duration: 4000,
 });
  this.router.navigate(['login'])
  }
  

}
