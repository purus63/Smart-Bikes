import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { WalletService } from '../../wallet.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Dialogbox3Component } from '../dialogbox3/dialogbox3.component';
import { MatDialog } from '@angular/material';
import { UsernameService } from 'src/app/services/username.service';
import { Subscription } from 'rxjs';
import { Wallet } from 'src/app/wallet';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})

export class WalletComponent implements OnInit {
  amount: number;
  wallet_balance: number;
  private wallet;
  registerForm: FormGroup;
  submitted = false;
  private subscription: Subscription;
  userId ='';
  
  
  constructor(private router: Router, private dataService: DataService,public dialog: MatDialog, private walletService: WalletService,private formBuilder: FormBuilder, private usernameservice:UsernameService) { }
 
  ngOnInit() { 
 
  

    this.subscription = this.usernameservice.username1.subscribe(
      value => {
        this.userId = value;
        console.log(value);
        if(value== null){
          this.userId = localStorage.getItem('username');
        }else{
          localStorage.setItem('username', this.userId);
        }
        console.log(this.userId);
      });
      console.log(this.userId);
       
      // this.saveWallet();
 this.getWallet();
    // this.registerForm = this.formBuilder.group({
    //   amount: ['', Validators.required],
    // });
  }



  // get f() { 
  //   return this.registerForm.controls; 
  // }

  getWallet(){
    console.log(this.userId);
    this.walletService.getWallet(this.userId).subscribe((message: any) => {this.wallet = message;
      console.log(this.userId);
      console.log(this.wallet);
      console.log(this.wallet.userID);
      this.wallet_balance = this.wallet.balance;
      console.log(this.wallet_balance);
    })
  }

//  saveWallet(){
//   this.walletService.saveWallet(this.userId).subscribe(message => {
//     console.log(message);
//   })
//  }


  openDialog(){
    this.dialog.open(Dialogbox3Component);
  }

  // onClick(){
  //     this.dataService.sendMessage(this.amount);
  //     this.router.navigateByUrl('/payment');
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.registerForm.invalid) {
  //     return;
  //   }
  //   else{
  //   this.onClick();
  //   }
  // }

}

