import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UploadDocumentsComponent } from './components/upload-documents/upload-documents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadDocumentsService } from '../app/services/upload_document/upload-documents.service';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { FooterComponent } from './components/footer/footer.component';
import {GetusersComponent} from './components/getusers/getusers.component';
import {DeleteuserComponent, ImageDialogComponent} from './components/deleteuser/deleteuser.component';
import {NavComponent} from "./components/nav/nav.component";
import {AddBikeComponent} from "./components/add-bike/add-bike.component";
import {BikesAndVehComponent} from "./components/bikes-and-veh/bikes-and-veh.component";
import { WalletComponent } from './components/wallet/wallet.component';
import { PaymentComponent } from './components/payment/payment.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';
import { WalletService } from './wallet.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import { Dialogbox2Component } from './components/dialogbox2/dialogbox2.component';
import { HistoryComponent } from './components/history/history.component';
import { BikeHistoryComponent } from './components/bike-history/bike-history.component';

import { AnalyticsDashboardComponent } from './components/analytics-dashboard/analytics-dashboard.component';

import { Dialogbox3Component } from './components/dialogbox3/dialogbox3.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { NquireitComponent } from './nquireit/nquireit.component';
import {NquireitChatboxModule} from 'nquireit';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    LandingPageComponent,
    UploadDocumentsComponent,
    routingComponents,
    DialogboxComponent,
    MainNavComponent,
    FooterComponent,
    GetusersComponent,
    DeleteuserComponent,
    ImageDialogComponent,
    NavComponent,
    AddBikeComponent,
    BikesAndVehComponent,
    WalletComponent,
    PaymentComponent,
    Dialogbox2Component,
    Dialogbox3Component,

   HistoryComponent,

   NquireitComponent, 

    BikeHistoryComponent,
   
    AnalyticsDashboardComponent,
    Dialogbox3Component

  ],

    
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    NgbModule,
    NgxSpinnerModule,
    ChartsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoic2F1cmFiaGJhZ2FkZSIsImEiOiJjazJ3eWcyajAwa3F4M3FvOXNkcXZsd2ljIn0.YeODOTRRyp6SDwFNMH-Xvg' // Optionnal, can also be set per map (accessToken input of mgl-map)
      
    }),
    NquireitChatboxModule
    
  ],
  entryComponents: [ImageDialogComponent, DialogboxComponent, Dialogbox2Component,Dialogbox3Component],
  providers: [UploadDocumentsService, DataService, WalletService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
