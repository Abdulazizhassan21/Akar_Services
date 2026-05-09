import { MainPageComponent } from './../components/main-page/main-page.component';
import { Routes } from '@angular/router';
import { Navbar } from '../components/navbar/navbar';
import { LogInComponent } from '../components/LogIn/LogIn.component';
import { HomeComponent } from '../components/Home/Home.component';
import { AboutComponent } from '../components/About/About.component';
import { SeirviceComponent } from '../components/Seirvice/Seirvice.component';
import { BookNowComponent } from '../components/BookNow/BookNow.component';
import { ForgetPasswordComponent } from '../components/Forget-Password/Forget-Password.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { RequstsComponent } from '../components/requsts/requsts.component';
import { PaymentComponent } from '../components/payment/payment.component';
import { PlumberComponent } from '../components/Plumber/Plumber.component';
import { CarpenterComponent } from '../components/carpenter/carpenter.component';
import { RegesterComponent } from '../components/regester/regester.component';
import { MechanicalComponent } from '../components/mechanical/mechanical.component';
import { CridetComponent } from '../components/cridet/cridet.component';
import { PainterComponent } from '../components/painter/painter.component';
import { Home_ServiceComponent } from '../components/Home_Service/Home_Service.component';
import { AtherComponent } from '../components/ather/ather.component';
import { ElectricianComponent } from '../components/Electrician/Electrician.component';
import { MetalComponent } from '../components/Metal/Metal.component';
import { DryComponent } from '../components/Dry/Dry.component';
import { ConfirmpasswordComponent } from '../components/confirmpassword/confirmpassword.component';

export const routes: Routes = [


{path:'' , redirectTo:'main', pathMatch:'full'},
{path:"main" , component:MainPageComponent},
{ path: 'login', component: LogInComponent },

// {path:"login" , component:LogInComponent},
// {path:"home" , component:HomeComponent},
// {path:"about" , component:AboutComponent},
// {path:"service" , component:SeirviceComponent},
// {path:"booknow" , component:BookNowComponent},


{
  path: '',
  component: Navbar,
  children: [
    { path: 'regester', component:RegesterComponent},
    { path: "about", component: AboutComponent },
    { path: "home", component: HomeComponent },
    { path: 'pulber', component:PlumberComponent },
    { path: 'carpenter', component:CarpenterComponent },
    { path: 'mechanical', component:MechanicalComponent },
    { path: 'painter', component:PainterComponent },
    { path: 'home_s', component:Home_ServiceComponent },
    { path: 'ather', component:AtherComponent },
    { path: 'elect', component:ElectricianComponent },
    { path: 'metal', component:MetalComponent },
    { path: 'dry', component:DryComponent },
    {
      path: 'service',
      component: SeirviceComponent,
      children: [
          {path:'' , redirectTo:'profile', pathMatch:'full'},
          {path:"profile" , component:ProfileComponent},
          {path:"requsts" , component:RequstsComponent},
          {path:"payment" , component:PaymentComponent},
          {path:"credit" , component:CridetComponent},
    ]
  },
      { path: 'booknow', component: BookNowComponent },
      { path: 'forget', component: ForgetPasswordComponent },
      { path: 'confirm', component: ConfirmpasswordComponent },
    ]
  },




];
