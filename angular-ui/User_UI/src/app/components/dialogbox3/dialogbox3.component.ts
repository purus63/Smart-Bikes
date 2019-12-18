import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialogbox3',
  templateUrl: './dialogbox3.component.html',
  styleUrls: ['./dialogbox3.component.css']
})
export class Dialogbox3Component implements OnInit {

  registerForm: FormGroup;
  submitted=false;
  amount: number;

  constructor(private router: Router, private dataService: DataService,private formBuilder: FormBuilder,private dialogRef:MatDialogRef<Dialogbox3Component>) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      amount: ['', Validators.required],
    });
  }

   get f() { 
    return this.registerForm.controls; 
  }

  closeDialog(){
    this.dialogRef.close();
  }

  onClick(){
    this.dataService.sendMessage(this.amount);
    this.router.navigateByUrl('/payment');
    this.closeDialog();
  }

  onSubmit() {
    this.submitted=true;
    if (this.registerForm.invalid) {
      return;
    }
    else{
    this.onClick();
    }
  }


}
