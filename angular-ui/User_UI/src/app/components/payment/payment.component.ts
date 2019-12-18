import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../../token.service';
import { DataService } from '../../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog} from '@angular/material';
import {Dialogbox2Component} from '../dialogbox2/dialogbox2.component';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { UsernameService } from 'src/app/services/username.service';



function monthRangeValidator(control: AbstractControl): { [key: string]: boolean }{
  if (control.value < 1 || control.value > 12) {
    return { 'monthRange': true };
  }
  return;
}


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  title = 'StripePayment';
  cardNumber: number;
  expMonth: number;
  expYear: number;
  cvc: number;
  amount: number;
  userId: string;
  subscription: Subscription

  constructor(private http: HttpClient, private token: TokenService, private dataService: DataService, private spinner: NgxSpinnerService, public dialog: MatDialog,private formBuilder: FormBuilder, private usernameservice: UsernameService ) { }

  chargeCreditCard() {
    (<any>window).Stripe.card.createToken({
      number: this.cardNumber,
      exp_month: this.expMonth,
      exp_year: this.expYear,
      cvc: this.cvc,
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        console.log(token);
        console.log(this.cardNumber);
        this.token.chargeCard(token, this.amount, this.userId);
      } else {
        console.log(response.error.message);
      }
    });
  }

  showSpinner() {
    this.spinner.show(undefined, { fullScreen: true });
    setTimeout(() => {
      this.spinner.hide();
      document.getElementById('btnn').click()
    }, 6000);
  }

  openDialog(){
    this.dialog.open(Dialogbox2Component);
  }

  // myFunction() {
  //   location.replace(environment.Url+"8088/userdashboard");
  // }

  ngOnInit() {
    this.dataService.getMessage().subscribe((message: any) => { this.amount = message; });
    console.log(this.amount);

    this.registerForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      expMonth: ['', [Validators.required,monthRangeValidator]],
      expYear: ['', Validators.required],
      cvc: ['', [Validators.required]]
    });

    this.subscription = this.usernameservice.username1.subscribe(
      value => {
        this.userId = value;
        console.log(value);
        if(value== null){
          this.userId = localStorage.getItem('username');
        }else{
          localStorage.setItem('username', this.userId);
        }
      });
      console.log(this.userId);
  }
  
     
  get f() { 
    return this.registerForm.controls; 
  }

  onSubmit() : void{
    this.submitted = true;
    if (this.registerForm.invalid == true) {
      return;
    }else{
      console.log('trying to submit ' + this.submitted);
      console.log('form is invalid' + this.registerForm.invalid);

      this.chargeCreditCard();
      console.log(this.submitted);
      this.showSpinner();
      // this.submitted = false;

    }
    
  }

}






