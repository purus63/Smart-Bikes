import {Binary} from '@angular/compiler';
import {SafeUrl} from '@angular/platform-browser';
export class User {
  number: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  aadharNo: number;
  gender: string;
  dob: Date;
  isBlocked = true;
  fileDl: File;
  fileDlb: File;
  logo: any = [];
  image: string;
  image1: string;
  downloadLink: SafeUrl;
  downloadLink1: SafeUrl;
}
