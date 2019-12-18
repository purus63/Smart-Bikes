import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/services/auth-service/authentication.service';
import {UsernameService} from "../../services/username.service";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = false;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private router: Router,
    private loginservice: AuthenticationService,
    private usernameService: UsernameService
  ) {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.usernameService.changeusername(this.username);
        this.router.navigate([`userdashboard`]).then(null);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
        //alert('Invalid Credentials');
      }
    ));
  }

}


