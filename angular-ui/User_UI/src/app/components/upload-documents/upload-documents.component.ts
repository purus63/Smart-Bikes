import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UploadDocumentsService} from '../../services/upload_document/upload-documents.service';
import {User} from '../../util';
import {MatDialog} from '@angular/material';
import {DialogboxComponent} from '../dialogbox/dialogbox.component';
import {UsernameService} from '../../services/username.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.css']
})
export class UploadDocumentsComponent implements OnInit, OnDestroy {
  public userFile: any = File;
  public userFiles: any = File;
  private minDate = new Date(1947, 1, 1);
  private maxDate = new Date(2016, 1, 1);
  firstname = '';
  lastname = '';
  gender = 'female';
  email = new FormControl('', [Validators.required, Validators.email]);
  aadharNo: number;
  private dob: Date;
  private username: string;
  private subscription: Subscription;
  submitted = false;
  private registerForm: FormGroup;
  disableFor1 = true;
  disableFor2 = true;
  disabled :string;


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  constructor(private signUp: UploadDocumentsService, public dialog: MatDialog,
              private  usernameService: UsernameService, private formBuilder: FormBuilder) {

  }

  get f() {
    return this.registerForm.controls;
  }

  fileUploads(event) {
    this.userFile = event.target.files[0];
    if (this.userFile !== undefined) {
      this.disableFor1 = false;
    } else {
      this.disableFor1 = true;
    }
    this.usernameService.sendfile(this.userFile);
    console.log(this.userFile);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      aadharNo: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      file:['',Validators.required],
      files:['',Validators.required]
    });


    this.subscription = this.usernameService.username1.subscribe(
      value => {
        this.username = value;
        console.log(value);
        if (value == null) {
          this.username = localStorage.getItem('username');
        } else {
          localStorage.setItem('username', this.username);
        }
        this.signUp.getUser(this.username).subscribe(data => {
          console.log(data);
          // if (data.firstname !== null) {   this.firstname = data.firstname;
          // }



        });
        this.signUp.checkIfFilled(this.username).subscribe(data =>{
          console.log(data)
          if(data==false)
            this.registerForm.disable();
        });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save() {
    console.log(this.firstname);
    const user = new User();
    user.firstname = this.firstname;
    user.lastname = this.lastname;
    user.aadharNo = this.aadharNo;
    user.email = this.email.value;
    user.gender = this.gender;
    user.dob = this.dob;
    console.log(this.dob);
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('file', this.userFile);
    formData.append('files', this.userFiles);
    this.signUp.saveUser(formData, this.username).subscribe(
      value => {
        console.log(value);
      }
    );
    this.openDialog();
// this.registerForm.disable();
  }

  fileUpload(event) {
    this.userFiles = event.target.files[0];
    console.log(this.userFiles);
    if (this.userFiles !== undefined) {
      this.disableFor2 = false;
    } else {
      this.disableFor2 = true;
    }
    console.log(this.disableFor2 && this.disableFor1);

  }

  openDialog() {
    this.dialog.open(DialogboxComponent);
  }


  onSubmit() {
    
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("57757yes")
      return;
    } else {
      console.log('4546gcfgd')
      this.save();
    }
  }
}


