import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import {NavComponent} from '../app/components/nav/nav.component';
import {AddBikeComponent} from '../app/components/add-bike/add-bike.component';
import { AuthGaurdService } from './services/auth-service/auth-gaurd.service';
import { PaymentComponent } from './components/payment/payment.component';
import { NquireitComponent } from './nquireit/nquireit.component';

const routes: Routes = [
  
    { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },

  { path: '', component: LandingPageComponent },

  // {path: 'userdashboard', component: UserDashboardComponent,canActivate:[AuthGaurdService]},

  {path: "logout", component: LandingPageComponent,canActivate:[AuthGaurdService]  },
  {path:"admin", component: NavComponent},
  {path:"addbike", component: AddBikeComponent},
  {path:"payment", component: PaymentComponent},
  {path:"nquireit", component:NquireitComponent},

  // {path: 'userdashboard', component: UserDashboardComponent, canActivate:[AuthGaurdService]},
  // {path: 'logout', component: LandingPageComponent, canActivate:[AuthGaurdService]  },
  // {path:'admin', component: NavComponent},
  // {path:'addbike', component: AddBikeComponent},
  // {path:'payment', component: PaymentComponent}

  // { path: '', component: LandingPageComponent },
  // {path: "logout", component: LandingPageComponent,canActivate:[AuthGaurdService]  },
  // {path:"admin", component: NavComponent},
  // {path:"addbike", component: AddBikeComponent},
  // {path:"payment", component: PaymentComponent},
  // {path: 'userdashboard', component: UserDashboardComponent, canActivate:[AuthGaurdService]},
  // {path: 'logout', component: LandingPageComponent, canActivate:[AuthGaurdService]  },
  // {path:'admin', component: NavComponent},
  // {path:'addbike', component: AddBikeComponent},
  // {path:'payment', component: PaymentComponent}
  {path: 'userdashboard', component: UserDashboardComponent},
  // {path: 'userdashboard', component: UserDashboardComponent, canActivate:[AuthGaurdService]},
  {path: 'logout', component: LandingPageComponent, canActivate:[AuthGaurdService]  },
  {path:'admin', component: NavComponent},
  {path:'addbike', component: AddBikeComponent},
  {path:'payment', component: PaymentComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes,{useHash:true})],

  // imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [LoginPageComponent,RegisterPageComponent]
