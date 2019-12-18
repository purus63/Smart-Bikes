import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {User} from '../../util';
import {DeleteuserService} from '../../services/upload_document/deleteuser.service';
import {FunAnimation} from '../../template.animations';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTableDataSource} from '@angular/material';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {MatSort} from '@angular/material/sort';
import {UsernameService} from '../../services/username.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css'],
  animations: [FunAnimation]
})
export class DeleteuserComponent implements OnInit {
  private allUsers: User[];
  displayedColumns: string[] = ['number', 'Username', 'name', 'status', 'documentfront', 'documentback', 'approvals'];
  dataSource = new MatTableDataSource(this.allUsers);
  logo: string;
  private binary: any;
  private len: any;
  private isBlocked: string;
  state = new Map<string, string>();
  private image: any;
  private fileDlb: string;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private deleteuserService: DeleteuserService,
    private sanitizer: DomSanitizer,
    public dialog: MatDialog,
    private  usernameservice: UsernameService
  ) {
  }

  ngOnInit() {
    this.deleteuserService.getUsers().subscribe(data => {
      console.log(data);
      let i = 0;
      this.allUsers = [];

      console.log(data[0].image);
      console.log(data[0].image1);

      for (const user of data) {
        console.log(i++);
        if (user.isBlocked === 'Blocked') {
          this.allUsers.push(user);
        }
      }
      console.log(this.allUsers);
      this.dataSource = new MatTableDataSource(this.allUsers);
      for (const usr of this.allUsers) {
        console.log(usr.image);
         console.log(usr.image1);
         usr.downloadLink = this.createImgUrl(usr.image);
         usr.downloadLink1 = this.createImg1Url(usr.image1);
       //const uname = Number.parseInt(usr.username, 10);
       //console.log(uname);
        this.state.set(usr.username, 'smaller');
      }
      this.dataSource.sort = this.sort;

    });
  }

  createImgUrl(image: string): SafeUrl {
    const binary = atob(image.replace(/\s/g, ''));
    const len = binary.length;
    const buffer = new ArrayBuffer(len);
    const view = new Uint8Array(buffer);
    for (let i = 0; i < len; i++) {
      view[i] = binary.charCodeAt(i);
    }
    // console.log(this.fileDlb);
    const blob = new Blob([view], {type: 'image/pdf'});
    const downloadLink = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
    console.log(downloadLink);
    return downloadLink;
  }

  createImg1Url(image1: string): SafeUrl {
    const binary1 = atob(image1.replace(/\s/g, ''));
    const len1 = binary1.length;
    const buffer1 = new ArrayBuffer(len1);
    const view1 = new Uint8Array(buffer1);
    for (let i = 0; i < len1; i++) {
      view1[i] = binary1.charCodeAt(i);
    }
    // console.log(this.fileDlb);
    const blob1 = new Blob([view1], {type: 'image/pdf'});
    const downloadLink1 = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob1));
    console.log(downloadLink1);
    return downloadLink1;
  }

  async approved(userId: string, email: string) {
    this.state.set(userId, 'larger');
    await this.delay(1000);
    const tempArray = [];
    for (const usr of this.allUsers) {
      if (usr.username !== userId) {
        tempArray.push(usr);
      }
    }
    this.allUsers = tempArray;
    this.dataSource = new MatTableDataSource(this.allUsers);
    this.deleteuserService.getemail(userId, email).subscribe(data => {
      console.log(data);
    });
    this.deleteuserService.updateStatus(userId).subscribe(data => {
      console.log(data);
      // this.dataSource = data;
      this.deleteuserService.updateUser(userId).subscribe(data => { console.log(data);});
    });

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  openDialog(safeUrl: SafeUrl): void {
    const dialogRef = this.dialog.open(ImageDialogComponent, {
      data: {url: safeUrl}
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

@Component({
  selector: 'app-image-dialog',
  templateUrl: 'image-dialog.html',
})
export class ImageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface DialogData {
  url: SafeUrl;
  }

